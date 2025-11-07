import HomeIcon from "../../assets/Icons/Home"
import AnalyticsIcon from "../../assets/Icons/AnalyticsIcon"
import CashIcon from "../../assets/Icons/Cash"
import PeopleIcon from "../../assets/Icons/PeopleIcon"
import WidgetIcon from "../../assets/Icons/Widgets"

export const NavLinks = [
    {
	name: 'Home', link: '/', icon: HomeIcon
},
    {
	name: 'Analytics', link: '/analytics', icon: AnalyticsIcon
},
    {
	name: 'Revenue', link: '/revenue', icon: CashIcon
},
    {
	name: 'CRM', link: '/crm', icon:PeopleIcon
},
    {
	name: 'Apps', link: '/apps', icon: WidgetIcon
},
]

export const filterOptions = ["Today", "Last 7 days", "This month", "Last 3 months"];
export const transactionTypes = ["Store transaction", "get tipped", "withdrawals", "chargebacks", "cashbacks", 'refer & Earn'];    
export const transactionStatuses = ["Successful", "Pending", "Failed"];