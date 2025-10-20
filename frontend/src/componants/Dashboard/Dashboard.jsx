import DashboardHeader from "../DashboardHeader/DashboardHeader"
import FileContainer from "../FileContainer/FileContainer"
import Sidebar from "../Sidebar/Sidebar"
import SubNavbar from "../SubNavbar/Subnavbar"
import "./Dashboard.css"

const Dashboard = () => {

    return (
        <div className="Dashboard">

            <DashboardHeader />
            
            <Sidebar />
            
            <SubNavbar />
            
            <FileContainer />
        </div>
    )
}

export default Dashboard