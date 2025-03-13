//estrutural

class Profile {
  constructor(name, email, profilePicture) {
    this.name = name;
    this.email = email;
    this.profilePicture = profilePicture;
  }

  display() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Profile Picture: ${this.profilePicture}`);
  }
}

class BasicProfile extends Profile {
  constructor(name, email, profilePicture) {
    super(name, email, profilePicture);
  }
}

class ProfileDecorator extends Profile {
  constructor(profile) {
    super(profile.name, profile.email, profile.profilePicture);
    this.profile = profile;
  }

  display() {
    this.profile.display();
  }
}

class BioDecorator extends ProfileDecorator {
  constructor(profile, bio) {
    super(profile);
    this.bio = bio;
  }

  display() {
    super.display();
    console.log(`Bio: ${this.bio}`);
  }
}

class SocialMediaDecorator extends ProfileDecorator {
  constructor(profile, socialMediaLinks) {
    super(profile);
    this.socialMediaLinks = socialMediaLinks;
  }

  display() {
    super.display();
    console.log(`Social Media Links: ${this.socialMediaLinks}`);
  }
}

class AgeDecorator extends ProfileDecorator {
  constructor(profile, age) {
    super(profile);
    this.age = age;
  }

  display() {
    super.display();
    console.log(`Age: ${this.age}`);
  }
}

let basicProfile = new BasicProfile("John Doe", "john@example.com", "profile.jpg");
// basicProfile.display();

let profileWithBio = new BioDecorator(basicProfile, "I'm a software engineer.");
// profileWithBio.display();

let profileWithSocialMedia = new SocialMediaDecorator(basicProfile, "@johndoe");
// profileWithSocialMedia.display();

let profileWithAge = new AgeDecorator(basicProfile, 25);
// profileWithAge.display();

let profileWithBioAndSocialMedia = new SocialMediaDecorator(profileWithBio, "@johndoe");
// profileWithBioAndSocialMedia.display();

let profileWithAgeBioAndSocialMedia = new AgeDecorator(profileWithBioAndSocialMedia, 25);
profileWithAgeBioAndSocialMedia.display();