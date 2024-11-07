import { useState } from 'react';
import styles from './CookieModal.module.css';

export const CookieModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {modalIsOpen && (
        <>
        <div className={styles.backdropContainer}>
          <section className={styles.modalContainer} aria-labelledby='cookie_heading'>
            <div className={styles.modalHeader}>
              <h1 id='cookie_heading'>🍪 Cookie Alert (Not the Baklava Kind) 🍪</h1>
              <button onClick={handleModalClose} className={styles.modalCloseButton}>
                ✂️
              </button>
            </div>
            <div className={styles.modalContent}>
              <p>
                Hey there, future hair model! 💁‍♂️ Just like how we track your hairline progress, we
                also track your cookies! Not the delicious Turkish ones (those come with our Premium
                Package), but the digital kind that help us remember if you're more of a "Jason
                Momoa" or "The Rock" aspiration type.
              </p>
              <p>
                By clicking "Make Me Hairy!", you accept our use of cookies to:
                <ul>
                  <li>Remember your current baldness level 🎱</li>
                  <li>Count how many times you've zoomed in on our before/after pics 👀</li>
                  <li>
                    Track how long you've been staring at your hairline in our website's reflection
                    ✨
                  </li>
                </ul>
              </p>
              <div className={styles.buttonContainer}>
                <button onClick={handleModalClose} className={styles.acceptButton}>
                  Make Me Hairy! 🦁
                </button>
                <button onClick={handleModalClose} className={styles.declineButton}>
                  Stay Bald 😢
                </button>
              </div>
            </div>
          </section>
        </div>
        </>
      )}
    </>
  );
};
