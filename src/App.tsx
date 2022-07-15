import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import AppFooter from "./components/AppFooter";
import styles from "./mystyles.module.css";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <body className={styles.main}>
        <MainContent />
      </body>

      <AppFooter />
    </>
  );
}

export default App;
