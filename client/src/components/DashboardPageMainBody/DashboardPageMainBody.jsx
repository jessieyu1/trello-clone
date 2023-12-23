import DashboardPageContent from "./components/DashboardPageContent/DashboardPageContent";
import DashboardPageSubNav from "./components/DashboardPageSubNav/DashboardPageSubNav";
function DashboardPageMainBody() {
  return (
    <div>
      <DashboardPageSubNav />
      <DashboardPageContent />
    </div>
  );
}

export default DashboardPageMainBody;
