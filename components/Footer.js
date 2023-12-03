import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          BarkSense is an open-source project created by Georgia Tech students.
        </p>
      </footer>
    </>
  )
}
