import styles from './EmailSignupForm.module.css';

export default function EmailSignupForm() {
  return (
    <>
      <h2 className={styles.emailHeader} id='turkey_header'>🦃 TURKEY'S HOTTEST HAIR-MAIL LIST 🦃</h2>
      <form className={styles.emailForm} onSubmit={e => e.preventDefault()} aria-labelledby='turkey_header'>
        <label for='sign_up_email_input'>Email:</label>
        <input
          placeholder="drop ur email here if ur ready 2 get hairy"
          className={styles.emailInput}
          id='sign_up_email_input'
          type='email'
        />
        <button
          className={styles.submitButton}
          onClick={() => alert('CONGRATS UR GONNA BE SO HAIRY SOON!!1!')}
        >
          🎉 YAAAS MAKE ME HAIRY PLZ 🎉
        </button>
        <span className={styles.disclaimer} id="contact">
          by clicking this button u agree to receive 500 emails/day about hair growth secrets that
          doctors HATE
        </span>
      </form>
    </>
  );
}
