import AboutSection from './components/AboutSection/AboutSection';
import Accordion from './components/Accordion/Accordion';
import { Button } from './components/Button/Button';
import { CookieModal } from './components/CookieModal/CookieModal';
import EmailSignupForm from './components/EmailSignupForm/EmailSignupForm';
import Services from './components/Services/Services';
import styles from './styles/Page.module.css';

export default function Page() {
  return (
    <>
      <CookieModal />

      {/* First section */}
      <header className={styles.main}>
        <span className={styles.welcomeHeading}>Welcome to</span>
        <h1 className={styles.companyName}>TurkHair 🦃 Travels & Transplants</h1>
        <button
          className={styles.scrollPrompt}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Sign up for a hairy good time! →
        </button>
      </header>

      <main>
        {/* About section */}
        <section className={styles.section} id="about" aria-labelledby='about_heading'>
          <AboutSection />
        </section>

        {/* Services section */}
        <section className={styles.sectionWhite} aria-labelledby='services-heading'>
          <Services />
        </section>

        {/* FAQ Accordion */}
        <section className={styles.section} aria-labelledby='FAQ_header'>
          <h2 id='FAQ_header'>FAQ</h2>
          <Accordion
            items={[
              {
                title: 'Will it hurt my head... and my wallet? 💰',
                content:
                  'Less than staying bald forever! Plus, you get a vacation out of it. Two birds, one follicle!',
              },
              {
                title: 'How long until I look like Jason Momoa? 🦁',
                content:
                  'Results vary, but most clients go from "Mr. Clean" to "Clean Mr. Worldwide" in about 6-12 months!',
              },
              {
                title: 'Why Turkey? 🇹🇷',
                content:
                  "Because combining hair transplants with baklava is the secret recipe for happiness! Also, our surgeons are the best in the business (and we're not just splitting hairs here).",
              },
            ]}
          />
        </section>
      </main>
      
      <footer>
        {/* email signup form */}
        <section className={styles.sectionWhite} aria-labelledby='turkey_header'>
          <EmailSignupForm />
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Warning: Side effects may include excessive confidence, increased dating success, and an
            unexplainable craving for Turkish coffee. Results may vary, but our jokes don't! 🦃✈️💇‍♂️
          </p>
        </footer>
      </footer>

      
    </>
  );
}
