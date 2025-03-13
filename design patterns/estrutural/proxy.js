//estrutural

class Document {
  open() {}
  edit(content) {}
}

class RealDocument extends Document {
  constructor(filename) {
    super();
    this.filename = filename;
    this.content = this.loadFromDisk();
  }

  loadFromDisk() {
    console.log(`Loading document from disk: ${this.filename}`);
    return "Document content..."; // Simulate loading content
  }

  open() {
    console.log(`Opening document: ${this.filename}`);
    return this.content;
  }

  edit(newContent) {
    console.log(`Editing document: ${this.filename}`);
    this.content = newContent;
  }
}

class DocumentProxy extends Document {
  constructor(filename, user) {
    super();
    this.filename = filename;
    this.user = user;
    this.realDocument = null;
  }

  checkAccess() {
    console.log(`Checking access for user: ${this.user}`);
    return this.user === "admin"; // Example permission check
  }

  open() {
    if (this.checkAccess()) {
      if (!this.realDocument) {
        this.realDocument = new RealDocument(this.filename);
      }
      return this.realDocument.open();
    } else {
      console.log("Access Denied: Unauthorized user");
      return null;
    }
  }

  edit(newContent) {
    if (this.checkAccess()) {
      if (!this.realDocument) {
        this.realDocument = new RealDocument(this.filename);
      }
      this.realDocument.edit(newContent);
    } else {
      console.log("Access Denied: Unauthorized user");
    }
  }
}

const user = "admi";
const docProxy = new DocumentProxy("sample.txt", user);

console.log(docProxy.open());

docProxy.edit("New content...");

console.log(docProxy.open());
