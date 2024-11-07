import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <>
      <h2 className={styles.sectionHeading} id='about_heading'>About Our Hairy Business</h2>
      <div className={styles.aboutGrid}>
        <img src="/company_logo.jpg" className={styles.companyLogo} />
        <div className={styles.about}>
          <span className={styles.establishedDate}>MAKING HEADS HAPPY SINCE 2024</span>
          <p className={styles.aboutText}>
            At TurkHair Travels & Transplants, we believe every scalp deserves a second chance!
            We're your one-stop-shop for combining vacation vibes with follicular dreams. Why stare
            at your bald spot when you could be staring at the Bosphorus? We'll turn your chrome
            dome into a luxury dome! 🌟
          </p>
        </div>
      </div>
    </>
  );
}
