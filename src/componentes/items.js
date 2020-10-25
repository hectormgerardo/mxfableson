import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";

const onClick = (e, item) => {
    window.alert(JSON.stringify(item, null, 2));
  }
  
const items = [
    {
      name: "Global Target Summary",
      label: "Global Target Summary",
      //Icon: ReceiptIcon,
      /*items: [
        { name: "statements", label: "Statements", onClick },
        { name: "reports", label: "Reports", onClick }
      ]*/
    },
    {
      name: "Net Forest Cover Change",
      label: "Net Forest Cover Change",
      //Icon: ReceiptIcon,
      items: [
        { name: "Cosa bien larga de ejemplo", label: "1", onClick },
        { name: "Cosa bien larga de ejemplo", label: "2", onClick }
      ]
    }
  ];

  export default items;