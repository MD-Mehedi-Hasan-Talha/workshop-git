export default function About() {
    return (<>
       
 
    <div className="about-section">
    <h1>Git Practice Workshop</h1>
    <p>
      Welcome to our Git practice session! This page is designed to help you
      understand basic Git commands and workflows while practicing version
      control.
    </p>
  </div>

  <div className="about-section">
    <h2>Essential Git Commands</h2>
    <p>Here are the fundamental Git commands you'll use in this practice:</p>

    <h3>Repository Setup</h3>
    <div className="command-block">
      git init<br />
      git clone [repository-url]<br />
      git remote add origin [repository-url]
    </div>

    <h3>Basic Workflow Commands</h3>
    <div className="command-block">
      git status<br />
      git add [file-name] or git add .<br />
      git commit -m "commit message"<br />
      git push origin [branch-name]
    </div>

    <h3>Branch Operations</h3>
    <div className="command-block">
      git branch [branch-name]<br />
      git checkout [branch-name]<br />
      git checkout -b [new-branch-name]<br />
      git merge [branch-name]
    </div>
  </div>

  <div className="about-section">
    <h2>Practice Exercise</h2>
    <p>
      In this exercise, you'll practice creating and managing an About page:
    </p>
    <ol className="commands-list">
      <li>
        Create a new branch:
        <span className="command-block">git checkout -b feature/about-page</span>
      </li>
      <li>Make changes to this file</li>
      <li>
        Stage changes: <span className="command-block">git add about.html</span>
      </li>
      <li>
        Commit changes:
        <span className="command-block"
          >git commit -m "Add about page content"</span
        >
      </li>
      <li>
        Push to remote:
        <span className="command-block">git push origin feature/about-page</span>
      </li>
    </ol>
    <p className="note">
      Remember to always pull the latest changes before starting work!
    </p>
  </div>

  <div className="about-section">
    <h2>Common Issues and Solutions</h2>
    <p>Here are some common Git issues you might encounter:</p>
    <ul className="commands-list">
      <li>
        <strong>Merge Conflicts:</strong> Occur when different branches modify
        the same code
      </li>
      <li>
        <strong>Push Rejection:</strong> Usually means you need to pull latest
        changes first
      </li>
      <li>
        <strong>Branch Issues:</strong> Always verify your current branch with
        <span className="command-block">git branch</span>
      </li>
    </ul>
  </div>

  <div className="about-section">
    <h2>Project Overview</h2>
    <p>
      This Git Workshop project is designed to help developers master version
      control using Git and GitHub. Our goal is to provide hands-on experience
      with:
    </p>
    <ul>
      <li>Basic Git operations and workflows</li>
      <li>Collaborative development practices</li>
      <li>Branch management and merging strategies</li>
      <li>Conflict resolution techniques</li>
      <li>Best practices for team collaboration</li>
    </ul>
  </div>

  <div className="about-section">
    <h2>Team Members</h2>
    <div className="team-grid">
      <div className="team-member">
        <h3>MD Mehedi Hasan Talha</h3>
        <p className="role">Project Lead</p>
        <p>Responsible for project architecture and team coordination</p>
      </div>
      <div className="team-member">
        <h3>Soab Mahmud Syfuddhin</h3>
        <p className="role">Developer</p>
        <p>Frontend development and documentation</p>
      </div>
      <div className="team-member">
        <h3>John Doe</h3>
        <p className="role">Git Instructor</p>
        <p>Workshop facilitation and content creation</p>
      </div>
    </div>
  </div>

  <div className="about-section">
    <h2>Contact Support</h2>
    <p>If you need help during the practice session:</p>
    <p>Email: git-support@example.com</p>
    <p>
      Workshop Repository:
      <a href="//github.com/MD-Mehedi-Hasan-Talha/workshop-git">
        https://github.com/MD-Mehedi-Hasan-Talha/workshop-git</a
      >
    </p>
    <p>
      Documentation: <a href="https://git-scm.com/doc">Git Documentation</a>
    </p>
  </div>

  </>
    );
}