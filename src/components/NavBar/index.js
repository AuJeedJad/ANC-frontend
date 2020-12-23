import React, { useState, useContext, useEffect } from 'react';
import './navBar.css';
import SideBar from '../SideBar/index';
import { Link } from 'react-router-dom';
import CurrentPregContext from '../../context/CurrentPregContext';

function NavBar(props) {
  const currentPregContext = useContext(CurrentPregContext);
  const navTab =
    props.role === 'mother'
      ? [
          { name: `เพิ่มเติม`, path: '' },
          { name: `สินค้าสำหรับเด็กอ่อน`, path: '/shopping/baby' },
          { name: `สินค้าสำหรับหญิงตั้งครรภ์`, path: '/shopping/mom' },
          { name: `อ่านบทความ`, path: '/content' },
          { name: `หน้าหลัก`, path: '/' },
        ]
      : props.role === 'staff'
      ? !currentPregContext.mother.currentPregId
        ? [
            { name: 'เพิ่มเติม', path: '' },
            { name: 'ลงทะเบียนหญิงตั้งครรภ์', path: '/staff/motherRegister' },
            { name: 'การตรวจวันนี้', path: '/staff/logToday' },
            { name: 'หน้าหลักโรงพยาบาล', path: '/' },
          ]
        : [
            { name: `เพิ่มเติม`, path: '' },
            { name: `ทันตกรรม`, path: '/staff/dental' },
            { name: `ดูแลตามอายุครรภ์`, path: '/staff/gaCare' },
            { name: `ตรวจครรภ์`, path: '/staff/anc' },
            { name: `ผล LAB`, path: '/staff/lab' },
            { name: `หน้าหลักหญิงตั้งครรภ์`, path: '/staff/motherReport' },
          ]
      : [
          { name: `ติดต่อเรา`, path: '/contactUs' },
          { name: `หาสินค้าสำหรับเด็กอ่อน`, path: '/shopping/baby' },
          { name: `หาสินค้าสำหรับหญิงตั้งครรภ์`, path: '/shopping/mom' },
          { name: `เข้าสู่ระบบ`, path: '/' },
          { name: `หน้าหลักบทคาม`, path: '/content' },
        ];

  const navTabCount = navTab.length;
  const navTabWidth = 68 / navTabCount + 32 / (navTabCount - 2);
  const navTabMove = (100 - navTabWidth) / (navTabCount - 1);
  const [tabStatus, setTabStatus] = useState({});
  const [selectTabStatus, setSelectTabStatus] = useState({});
  const [tabSelect, setTabSelect] = useState(navTabCount - 1);
  const [lastTabSelect, setLastTabSelect] = useState(4);

  useEffect(() => {
    if (tabSelect !== 0) {
      props.setShow(false);
    } else {
      if (props.show === false) setTabSelect(lastTabSelect);
    }
  }, [tabSelect, props.show]);

  useEffect(() => {
    setLastTabSelect(props.page);
    setZIndex(navTab.findIndex((path) => path.path === props.page));
    setSelectZIndex(navTab.findIndex((path) => path.path === props.page));
  }, [props.page]);

  const setZIndex = (tabNO) => {
    let newTabStatus = {};
    for (let i = 0; i <= navTabCount - 1; i++) {
      newTabStatus = i >= tabNO ? { ...newTabStatus, [i]: tabNO - i + 10 } : { ...newTabStatus, [i]: i - tabNO + 10 };
    }
    setTabStatus(newTabStatus);
  };

  const setSelectZIndex = (tabNO) => {
    let newTabStatus = {};
    for (let i = 0; i <= navTabCount - 1; i++) {
      newTabStatus = i >= tabNO ? { ...newTabStatus, [i]: tabNO - i + 10 } : { ...newTabStatus, [i]: i - tabNO + 10 };
    }
    setSelectTabStatus(newTabStatus);
  };

  return (
    <nav className="nav-container" onMouseLeave={() => setTabStatus(selectTabStatus)}>
      {navTab.map((topic, ind) => {
        return (
          <Link
            className="nav-sidebar"
            to={topic.path}
            onClick={
              topic.name === `เพิ่มเติม`
                ? (e) => {
                    e.preventDefault();
                  }
                : null
            }
          >
            <div
              className={`nav-link ${topic.path === props.page ? 'nav-link--active' : null}`}
              onMouseOver={() => {
                setZIndex(ind);
              }}
              onClick={() => {
                setTabSelect(ind);
                setZIndex(ind);
                if (ind === 0) {
                  props.setShow(!props.show);
                } else {
                  setLastTabSelect(ind);
                }
              }}
              style={{
                left: `${navTabMove * ind}%`,
                zIndex: tabStatus[ind],
                width: `${navTabWidth}%`,
              }}
            >
              {topic.name}
            </div>
            {topic.name === `เพิ่มเติม` ? (
              <SideBar
                role={props.role}
                setRole={props.setRole}
                width={navTabWidth}
                page={props.page}
                show={props.show}
                setShow={props.setShow}
              />
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavBar;
