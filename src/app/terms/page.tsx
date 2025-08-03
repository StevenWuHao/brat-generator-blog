import Link from "next/link";

export default function Page() {
  return (
    <main className="container max-w-3xl py-12 px-4 mx-auto">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        Welcome to Brat Generator, accessible from{" "}
        <Link href="/" className="text-blue-600 underline">
          bratgenerator.blog
        </Link>
        . Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of
        Service&quot;) carefully before using the Brat Generator web application
        (&quot;Service&quot;).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By accessing and using our Service, you accept and agree to be bound by
        the terms and provisions of these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        2. Changes to the Terms
      </h2>
      <p className="mb-4">
        We reserve the right to modify these Terms at any time. It is your
        responsibility to check these Terms periodically for changes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        3. Use of the Service
      </h2>
      <p className="mb-4">
        You agree not to use the Service in any way that is harmful, illegal, or
        inappropriate. You are responsible for maintaining the confidentiality
        of your account and password.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Termination</h2>
      <p className="mb-4">
        We may terminate or suspend your account without notice for conduct that
        we determine violates these Terms or is harmful to other users, us, or
        third parties, or for any other reason.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Content</h2>
      <p className="mb-4">
        You are responsible for all content you upload, post, or otherwise make
        available through the Service. Brat Generator has the right, but not the
        obligation, to monitor and review any content provided by its users. We
        may remove any content that, in our judgment, violates these Terms or
        may be harmful.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        6. Intellectual Property
      </h2>
      <p className="mb-4">
        All content, features, and functionality of the Service are owned by
        Brat Generator, its licensors, or other providers and are protected by
        international copyright, trademark, and other intellectual property
        laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        7. Links to Other Websites
      </h2>
      <p className="mb-4">
        Our Service may contain links to third-party websites. If you click on a
        third-party link, you will be directed to that site. We have no control
        over and assume no responsibility for the content or practices of any
        third-party sites or services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Disclaimer</h2>
      <p className="mb-4">
        The Service is provided on an &quot;as is&quot; and &quot;as
        available&quot; basis. Brat Generator makes no representations or
        warranties of any kind, whether express or implied, about the
        completeness, accuracy, reliability, suitability, or availability of the
        Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        9. Limitation of Liability
      </h2>
      <p className="mb-4">
        In no event shall Brat Generator, nor its directors, employees, or
        agents, be liable for any indirect, incidental, special, or
        consequential damages arising out of or in connection with your use of
        the Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Terms of Service, please contact us
        at:{" "}
        <a
          href="mailto:steve20200512@gmail.com"
          className="text-blue-600 underline"
        >
          steve20200512@gmail.com
        </a>
      </p>
    </main>
  );
}
