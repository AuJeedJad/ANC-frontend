import React from 'react';
import { Route, Switch } from 'react-router-dom';
import permissionList from '../config/roles.js';
import NotFound from '../pages/NotFound/index';
import Layout from '../components/Layout/index';

function PrivateRoutes(props) {
  const role = props.role || 'guest';
  const pageList = permissionList[role];

  //   console.log(permissionList);

  return (
    <Switch>
      {pageList.map((page) => (
        <Route exact path={page.url}>
          {page.name === 'login' ? (
            <page.page setRole={props.setRole} />
          ) : (
            <Layout role={role} setRole={props.setRole}>
              <page.page setRole={props.setRole} />
            </Layout>
          )}
        </Route>
      ))}
      <Route path="*">
        <Layout role={role}>
          <NotFound />
        </Layout>
      </Route>
    </Switch>
  );
}

export default PrivateRoutes;
