# Intro to final project
- API Server and Web server will be uncoupled

### What computers are involved in a web app?
- Database Server
- Identity server -> keeps track of authenticating people 
- In the **"backend"**:
    * The web server/API Server layer -> Somewhere to load webpages from
        * Communicates w/ DB
        * Node, Express, Flask
- Owner apps, B2B 
    * Ex: Stripe
- Client
    * Browser(in web cases)
    * Uses JS, Vue
    * Client is loaded from the web server
    * Communicates with the API server
- Development machine
    * Your laptop, dev environment
- CI/CD machine
    * Moves dev environment to deploymenet environment
    * Ensures packages are working together
    * Testing

### Package management
- It's extremely important to ensure that all packages work correctly

### NodeJs
- JS Runtime 
- Used for using server side apps, but can also be used for scripting and CLIs 
### NPM (Node package manager)
- Default package manager for Node
- node_modules -> where NPM installs packages and dependencies
- Package.json -> file contianing metadata about package dependencies
### Package.json
- Created by "npm init"
- **"Scripts"**:
    * 
    cd client
   npm install
   npm run format
   npm run dev
- **"Dependencies"**:
    * Packages we depend on that are used in the project
    * **Types**: Regular, dev, peer, optional
        * Regular: what you need to run your app
        * Dev: what you need to progrma and compile
        * Peer: dependencies that are necessary, but can't be downloaded by NPM
        * It's useful to add types to devDependencies along with any JS dependency
- Dependency format in pakcage.json: 
    * "name": "major.minor.patch"
    * patch -> doesnt change functionality, just fixes
    * minor number -> adding features, resets patch numbers
    * major number -> adding breaking changes
### .gitignore file
- Allows you to configure which files are tracked by git
- **What you should gitignore**:
    * Any secrets (passworkd, api key)
    * Anything created from other code
        * .db files, packages, compiled code,
        * caches
- Use AI to make gitignores




    