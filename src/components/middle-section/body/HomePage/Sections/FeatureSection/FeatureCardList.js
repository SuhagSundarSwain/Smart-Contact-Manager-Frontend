import {
  GroupOutlined,
  CloudOutlined,
  SearchOutlined,
  LockOutlined,
  BoltOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";

const FeatureCardList = [
  {
    logo: <GroupOutlined fontSize="large" color="primary" />,
    title: "Unlimited Contacts",
    subtitle: "Store as many contacts as you need",
  },
  {
    logo: <CloudOutlined fontSize="large" color="primary" />,
    title: "Cloud Sync",
    subtitle: "Access your contacts from any device",
  },
  {
    logo: <SearchOutlined fontSize="large" color="primary" />,
    title: "Smart Search",
    subtitle: "Find contacts quickly with advanced search",
  },
  {
    logo: <LockOutlined fontSize="large" color="primary" />,
    title: "Secure Storage",
    subtitle: "Your data is encrypted and protected",
  },
  {
    logo: <BoltOutlined fontSize="large" color="primary" />,
    title: "Fast Performance",
    subtitle: "Lightning-fast contact management",
  },
  {
    logo: <WorkspacePremiumOutlined fontSize="large" color="primary" />,
    title: "Premium Support",
    subtitle: "Get help when you need it",
  },
];

export default FeatureCardList;
