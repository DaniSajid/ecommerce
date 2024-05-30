import React, { memo, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import NavBtn from './NavBtn';
import NavLogo from './NavLogo';
import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem } from '@mui/material';
import { AddShoppingCartOutlined } from '@mui/icons-material';
import { CartContext } from '../context/Context';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem('isUserLoggedIn');
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (isLogin && loggedInUser) {
      setIsLoggedIn(true);
      setUserName(JSON.parse(loggedInUser));
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand text-dark" href="#"><NavLogo /> TrendyTreads</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <MenuOutlinedIcon/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <NavItem to="/" page="Home" />
            <NavItem to="/category" page="Category" />
            <NavItem to="/about" page="About" />
          </ul>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <AddShoppingCartOutlined />  <span className='css-addCart'>{cart.length}</span>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {cart.map((value, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Travis Howard" src={value.imagePath} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={value.name}
                        secondary={
                          <React.Fragment>
                            {value.desc}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </List>
                </MenuItem>
              ))}
            </Menu>
            {isLoggedIn ? (
              <>
                <NavBtn className="mx-3" BtnName={userName} />
                <NavBtn className='mx-1' BtnName="Logout" onClick={handleLogout} />
              </>
            ) : (
              <>
                <Link className='mx-2' to="/login"><NavBtn BtnName="Login" /></Link>
                <Link to="/signup" className='mx-1'><NavBtn BtnName="Signup" /></Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
