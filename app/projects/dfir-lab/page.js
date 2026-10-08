
export default function Page() {
  return (
    <main>
      <section className="caseHero">
        <div className="shell">
          <div className="kicker">
            <span className="pulse"></span>
            Digital Forensics • Completed Case Study
          </div>

          <h1>
            DFIR Lab: Reconstructing Suspicious Activity
            on a Windows Endpoint
          </h1>

          <p className="lead">
            A completed 30-day digital forensics investigation
            using a controlled Windows 11 environment,
            synthetic activity, preserved evidence and
            documented forensic analysis.
          </p>

          <div className="actions">
            <a
              className="btn primary"
              href="https://github.com/chooksemmanuel/dfir-lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Investigation Repository
            </a>
            <a className="btn" href="/">
              ← Portfolio
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="shell caseGrid">
          <div className="caseBox">
            <h2>Investigation Overview</h2>
            <p>
              DFIR-CASE-001 investigated controlled suspicious
              user activity involving file staging, archive
              creation, removable media, browser activity and
              file deletion on a Windows 11 endpoint.
            </p>

            <h2>Evidence Acquisition</h2>
            <p>
              Acquired a physical USB image, captured a
              post-reboot memory image and preserved the
              VMware endpoint disk and snapshot files.
              Recorded SHA-256 hashes and documented
              evidence-handling procedures and limitations.
            </p>

            <h2>Forensic Analysis</h2>
            <ul>
              <li>
                Examined USB and Windows filesystem artifacts
                using FTK Imager and Autopsy.
              </li>
              <li>
                Investigated deleted files, Recycle Bin records,
                browser history and PowerShell command history.
              </li>
              <li>
                Analyzed captured memory using Volatility 3,
                including processes and available network state.
              </li>
              <li>
                Correlated endpoint and USB archive evidence
                using SHA-256 hashes.
              </li>
              <li>
                Reconstructed an evidence-supported timeline
                of relevant activity.
              </li>
            </ul>

            <h2>Outcome</h2>
            <p>
              Completed the case with documented findings,
              an investigation timeline, a forensic report and
              formal case-closure records. The report distinguishes
              supported observations from interpretations and
              acknowledges acquisition and analysis limitations.
            </p>

            <h2>What I Learned</h2>
            <p>
              The investigation reinforced the importance of
              evidence integrity, careful documentation,
              cross-source verification and avoiding conclusions
              that go beyond the available artifacts.
            </p>
          </div>

          <aside className="caseBox">
            <h3>Case Status</h3>
            <p>Completed | DFIR-CASE-001 Closed</p>

            <h3>Duration</h3>
            <p>30-Day Investigation</p>

            <h3>Environment</h3>
            <p>Windows 11 • VMware Workstation</p>

            <h3>Tools</h3>
            <p>
              Autopsy • FTK Imager • Volatility 3 •
              WinPmem • PowerShell • SHA-256
            </p>

            <h3>Evidence Sources</h3>
            <p>
              Removable Media • Endpoint Disk •
              Post-Reboot Memory
            </p>

            <h3>Documentation</h3>
            <p>
              Evidence Manifest • Timeline •
              Forensic Report • Case Closure
            </p>

            <a
              href="https://github.com/chooksemmanuel/dfir-lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Full Investigation ↗
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
