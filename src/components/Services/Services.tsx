import styles from './Services.module.css';

export default function Services() {
  return (
    <>
      <h2 className={styles.sectionHeading} id='services-heading'>Our Hair-raising Services</h2>
      <div className={styles.servicesGrid}>
        {['The Istanbul Special', 'Bald & Beautiful Package', 'The Full Turkish Delight'].map(
          (service, index) => (
            <section key={service} className={styles.serviceCard} aria-labelledby={`service-${index}`}>
              <h3 className={styles.serviceTitle} id={`service-${index}`}>{service}</h3>
              <p className={styles.serviceDescription}>
                {service === 'The Istanbul Special' &&
                  'Get ready for the hair of your dreams while eating kebabs! Includes 2-night stay and unlimited Turkish tea! 🫖'}
                {service === 'Bald & Beautiful Package' &&
                  'From bowling ball to beautiful! Includes spa treatment and a genuine Turkish carpet to practice your new hair-flip on! 💇‍♂️'}
                {service === 'The Full Turkish Delight' &&
                  'The works! Hair transplant, guided tours, and a complementary fez hat to wear until your new hair grows in! 🧢'}
              </p>
            </section>
          ),
        )}
      </div>
    </>
  );
}
