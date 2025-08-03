import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-sm leading-7 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      <p>
        <strong>Last Updated:</strong> August 3, 2025
      </p>

      <h2 className="mt-8 font-semibold text-lg">1. Information We Collect</h2>
      <p>
        We do <strong>not collect any personal information</strong> directly.
        You can use the Brat Generator tool without creating an account or
        submitting any personal details.
      </p>
      <p className="mt-2">However, we may collect limited non-personal data:</p>
      <ul className="list-disc ml-6 mt-1">
        <li>
          <strong>Usage analytics:</strong> We use{" "}
          <Link
            href="https://plausible.io"
            target="_blank"
            className="text-blue-600 underline"
          >
            Plausible Analytics
          </Link>{" "}
          to track anonymized usage data (e.g., page views, referrers, device
          type) without using cookies or personal identifiers.
        </li>
        <li>
          <strong>Server logs:</strong> Our hosting provider (Vercel) may log
          basic technical information such as IP address, browser type, and time
          of access.
        </li>
      </ul>

      <h2 className="mt-8 font-semibold text-lg">2. Cookies and Tracking</h2>
      <p>
        We do <strong>not</strong> use cookies, fingerprinting, or third-party
        trackers for advertising purposes.
      </p>
      <p className="mt-2">
        We use <strong>Plausible Analytics</strong>, which is a privacy‑focused,
        cookieless analytics platform that complies with GDPR, CCPA, and PECR.
      </p>

      <h2 className="mt-8 font-semibold text-lg">
        3. How We Use the Information
      </h2>
      <ul className="list-disc ml-6">
        <li>Understand general usage trends</li>
        <li>Improve and maintain the performance of the website</li>
        <li>Debug technical issues</li>
      </ul>
      <p className="mt-2">
        We do <strong>not</strong> use your data for personalized ads or
        share/sell it with third parties.
      </p>

      <h2 className="mt-8 font-semibold text-lg">4. Third-Party Services</h2>
      <p>
        We use the following services which may process limited technical data:
      </p>
      <ul className="list-disc ml-6 mt-1">
        <li>
          <Link
            href="https://plausible.io/data-policy"
            target="_blank"
            className="text-blue-600 underline"
          >
            Plausible Analytics
          </Link>{" "}
          – for anonymized analytics
        </li>
        <li>
          <Link
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            className="text-blue-600 underline"
          >
            Vercel
          </Link>{" "}
          – our hosting provider
        </li>
      </ul>

      <h2 className="mt-8 font-semibold text-lg">5. Data Retention</h2>
      <p>
        We retain anonymized usage data (via Plausible) for up to{" "}
        <strong>24 months</strong> to monitor site trends. No personal data is
        stored on our servers.
      </p>

      <h2 className="mt-8 font-semibold text-lg">6. Your Rights</h2>
      <p>
        Under applicable privacy laws (e.g., GDPR), you may have the right to:
      </p>
      <ul className="list-disc ml-6 mt-1">
        <li>
          Request access to data collected (note: we do not collect personal
          data)
        </li>
        <li>Request deletion of any stored data (if applicable)</li>
        <li>Contact us with privacy concerns</li>
      </ul>
      <p className="mt-2">
        Contact us at:{" "}
        <Link
          href="mailto:steve20200512@gmail.com"
          className="text-blue-600 underline"
        >
          steve20200512@gmail.com
        </Link>
      </p>

      <h2 className="mt-8 font-semibold text-lg">7. Children’s Privacy</h2>
      <p>
        This site is not intended for use by children under 13. We do not
        knowingly collect personal data from anyone under 13.
      </p>

      <h2 className="mt-8 font-semibold text-lg">8. Changes to This Policy</h2>
      <p>
        We may update this policy occasionally. When we do, we’ll update the
        “Last Updated” date above. Significant changes will be announced on the
        site.
      </p>

      <h2 className="mt-8 font-semibold text-lg">9. Contact</h2>
      <p>
        For questions or concerns, email us at:{" "}
        <Link
          href="mailto:steve20200512@gmail.com"
          className="text-blue-600 underline"
        >
          steve20200512@gmail.com
        </Link>
      </p>
    </main>
  );
}
