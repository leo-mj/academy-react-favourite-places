import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import AppFooter from "./components/AppFooter";
import styles from "./mystyles.module.css";

function App(): JSX.Element {
  return (
    <div className={styles.main}>
      <section className={styles.heading}>
        <AppHeader />
      </section>
      <body>
        <MainContent />
      </body>
      <section className={styles.footer}>
        <AppFooter />
      </section>
    </div>
  );
}

export default App;
