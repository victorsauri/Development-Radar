import {
  Link,
  Sidebar,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
  SidebarSpace,
  sidebarConfig,
  useSidebarOpenState
} from '@backstage/core-components';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MapIcon from '@material-ui/icons/MyLocation';
import React, { PropsWithChildren } from 'react';
import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';

const useSidebarLogoStyles = makeStyles({
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -14,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 24,
  },
});

const SidebarLogo = () => {
  const classes = useSidebarLogoStyles();
  const { isOpen } = useSidebarOpenState();

  return (
    <div className={classes.root}>
      <Link to="/" underline="none" className={classes.link} aria-label="Home">
        {isOpen ? <LogoFull /> : <LogoIcon />}
      </Link>
    </div>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SidebarPage>
    <Sidebar>
      <SidebarLogo />
      <SidebarGroup label="Menu" icon={<MenuIcon />}>
        <SidebarItem icon={MapIcon} to="dev-radar" text="Dev Radar" />
      </SidebarGroup>
      <SidebarSpace />
    </Sidebar>
    {children}
  </SidebarPage>
);
