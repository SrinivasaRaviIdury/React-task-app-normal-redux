import RequestsForm from "../components/Requests/RequestsForm";
import StartingPageContent from "../components/StartingPage/StartingPageContent";
import classes from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <StartingPageContent />
      <RequestsForm />
    </div>
  );
};

export default HomePage;
