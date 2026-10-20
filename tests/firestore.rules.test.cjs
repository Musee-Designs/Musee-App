const fs = require("node:fs");
const {
  initializeTestEnvironment,
  assertSucceeds,
  assertFails,
} = require("@firebase/rules-unit-testing");

const { Timestamp } = require("firebase/firestore");

async function main() {
  const testEnv = await initializeTestEnvironment({
    projectId: "musee-app-68580",
    firestore: {
      host: "127.0.0.1",
      port: 8080,
      rules: fs.readFileSync("firestore.rules", "utf8"),
    },
  });

  try {
    const alice = testEnv.authenticatedContext("alice");
    const bob = testEnv.authenticatedContext("bob");
    const guest = testEnv.unauthenticatedContext();

    const aliceProfile = {
      uid: "alice",
      username: "alice",
      displayName: "Alice",
      bio: "",
      photoURL: null,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    const aliceRef = alice.firestore().doc("users/alice");

    // Unauthenticated users cannot read profiles.
    await assertFails(
      guest.firestore().doc("users/alice").get()
    );

    // Users cannot create another user's profile.
    await assertFails(
      bob.firestore().doc("users/alice").set(aliceProfile)
    );

    // Seed a profile without applying rules.
    await testEnv.withSecurityRulesDisabled(async (context) => {
      await context.firestore()
        .doc("users/alice")
        .set(aliceProfile);
    });

    // Authenticated users can read public profiles.
    await assertSucceeds(aliceRef.get());
    await assertSucceeds(
      bob.firestore().doc("users/alice").get()
    );

    // Other users cannot edit Alice's profile.
    await assertFails(
      bob.firestore().doc("users/alice").update({
        displayName: "Changed by Bob",
      })
    );

    // Alice cannot read Bob's saved songs.
    await assertFails(
      alice.firestore()
        .doc("users/bob/savedSongs/track123")
        .get()
    );

    console.log("Firestore security tests passed.");
  } finally {
    await testEnv.cleanup();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
