import { Screen } from './consts';
import { NavigatorScreenParams } from '@react-navigation/native';

export type MainStackParamList = {
  [Screen.MainDashboard]: undefined;
  [Screen.MainCosts]: undefined;
  [Screen.MainInvoices]: undefined;
  [Screen.MainDevMode]: undefined;
};

export type RootStackParamList = {
  [Screen.Main]: NavigatorScreenParams<MainStackParamList>;
  [Screen.Costs]: undefined;
  [Screen.CostsAdd]: undefined;
  [Screen.CostsAdd2]: undefined;
  [Screen.CostsAddFinish]: undefined;
  [Screen.Invoices]: undefined;
  [Screen.DevMode]: undefined;
};
