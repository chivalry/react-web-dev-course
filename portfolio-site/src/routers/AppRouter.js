import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PortfolioDashboardPage from '../components/PortfolioDashboardPage';
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PortfolioDashboardPage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioPage} />
                <Route path="/portfolio" component={PortfolioPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;