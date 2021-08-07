/* eslint-disable linebreak-style */
import IssueList from './IssueList.jsx';
import IssueReport from './IssueReport.jsx';
import IssueEdit from './IssueEdit.jsx';
import About from './About.jsx';
import Crypto from './Crypto.jsx';
import NotFound from './NotFound.jsx';
import HomeUi from './HomeUi.jsx';
import CurrencyConversion from './CurrencyConversion.jsx';
import Stock from './Stock.jsx';


const routes = [
  { path: '/issues/:id?', component: IssueList },
  { path: '/edit/:id', component: IssueEdit },
  { path: '/report', component: IssueReport },
  { path: '/about', component: About },
  { path: '/crypto', component: Crypto },
  { path: '/HomeUi', component: HomeUi },
  { path: '/Stock', component: Stock },
  { path: '/CurrencyConversion', component: CurrencyConversion },
  { path: '*', component: NotFound },
];

export default routes;
