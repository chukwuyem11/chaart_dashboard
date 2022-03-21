import Image from "next/image";
import { css, jsx } from "@emotion/react";
import React, { useState } from "react";
import { GrFormSearch } from "react-icons/gr";
import { CgBell } from "react-icons/cg";
import Popup from 'reactjs-popup';
import { AiOutlinePlus } from "react-icons/ai";
import facepaint from "facepaint";
import { HiClock } from "react-icons/hi";
import {AiOutlineHome, AiOutlinePieChart, AiOutlineUnorderedList, AiOutlineClockCircle, AiOutlineSetting
} from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Nav = (props) => {
  const [tab, setTab] = useState("a")

  return (
    <div
      css={mq({
        display: "flex",
        flexDirection: ["column","row","row","row"]
        
      })}
    >
      <div css={mq({
         display: ["flex","none","none","none"],
        alignItems: "center",
        backgroundColor: "#fbf5ee",
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: "space-between",
        paddingLeft: [20,0,0,0],
            paddingRight:  [20,0,0,0],
           
      })}>
          
        <div>
           <div
                css={mq({
                  fontSize: [25,25,25,25],
                  color: "#310e3a",
                  fontWeight: 600,
                })}
              >
                Hi, Dupe
              </div></div>
      <div css={mq({
            display: "flex",
           
            
          })}>
            <Popup trigger={<div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: "#ffffff",
                  fontSize: 25,
                  marginRight: 20,
                  cursor: "pointer",
                  boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
                })}
              >
                <BiMenuAltRight />
                
              </div>} position="bottom">
    <div css={mq({
      backgroundColor: "#ffffff",
      padding: 20,
      paddingRight: 40,
      borderRadius: 5,
      display: "flex",
      justifyContent: "center"
  
    })}>
      <ul
              css={mq({
                listStyleType: "none",
                marginLeft: -20
              })}
            >
                <li css={mq({
                  cursor: "pointer",
                })} onClick={() => setTab("a")}>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    fontSize: 20,
                    color: tab == "a"? "#310e3a" : "#c1b6c4",
                  })}
                >
                  <AiOutlineHome color={ tab == "a"? "#310e3a" : "#c1b6c4"} />
                  <div
                    css={mq({
                      fontWeight: 500,
                      fontSize: 18,
                      marginLeft: 10,
                    })}
                  >
                    Dashboard
                  </div>
                </div>
              </li>
              <li css={mq({
                  cursor: "pointer",
                })} onClick={() => setTab("b")}>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                    fontSize: 20
                  })}
                >
                  <AiOutlinePieChart color={tab == "b"? "#310e3a" : "#c1b6c4"} />
                  <div
                    css={mq({
                      marginLeft: 10,
                      fontWeight: 500,
                      fontSize: 18,
                      color: tab == "b"? "#310e3a" : "#c1b6c4",
                    })}
                  >
                    Analytics
                  </div>
                </div>
              </li>
              
              <li css={mq({
                  cursor: "pointer",
                })} onClick={() => setTab("c")}>
                {" "}
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                     fontSize: 20
                  })}
                >
                  <AiOutlineUnorderedList color={tab == "c"? "#310e3a" : "#c1b6c4"} />
                  <div
                    css={mq({
                      marginLeft: 10,
                      fontWeight: 500,
                      fontSize: 18,
                      color: tab == "c"? "#310e3a" : "#c1b6c4",
                    })}
                  >
                    Task List
                  </div>
                </div>
              </li>
              <li css={mq({
                  cursor: "pointer",
                })} onClick={() => setTab("d")}>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                    fontSize: 20
                  })}
                >
                  <AiOutlineClockCircle color={tab == "d"? "#310e3a" : "#c1b6c4"} />
                  <div
                    css={mq({
                      marginLeft: 10,
                      fontWeight: 500,
                      fontSize: 18,
                      color: tab == "d"? "#310e3a" : "#c1b6c4",
                    })}
                  >
                    Tracking
                  </div>
                </div>
              </li>
              <li css={mq({
                  cursor: "pointer",
                })} onClick={() => setTab("e")}>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                    fontSize: 20
                  })}
                >
                  <AiOutlineSetting color={tab == "e"? "#310e3a" : "#c1b6c4"} />
                  <div
                    css={mq({
                      marginLeft: 10,
                      fontWeight: 500,
                      fontSize: 18,
                      color: tab == "e"? "#310e3a" : "#c1b6c4",
                    })}
                  >
                    Setting
                  </div>
                </div>
              </li>
              
              
              
            </ul></div>
  </Popup>
  <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: "#ffffff",
                  fontSize: 25,
                  marginRight: 20,
                  cursor: "pointer",
                  boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
                })}
              >
                <CgBell />
              </div>

   <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: "#ffffff",
                  fontSize: 25,
                  cursor: "pointer",
                  boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
                })}
              >
                <GrFormSearch />
              </div> 
          
             
             </div>
      </div>
      <div css={mq({
        flex: "20%",
        display: ["flex","none","flex","flex"],
        
      })}>
      <div>
        <div
          css={mq({
            display: "flex",
            justifyContent: ["space-between","left","left","left"],
            alignItems: "center",
            display: ["none","block","block","block"],
            
            marginTop: [10, 0, 50],
            marginLeft: [0, 0, 40],
          })}
        >
          <div css={mq({
              display: "flex",
              alignItems: "center",
          })}>
          <img
            src="logo.png"
            css={mq({
              width: [60, 80, 60],
              
              height: "auto",
            })}
          />
          <div
            css={mq({
              color: "#310e3a",
              
              fontSize: 30,
              fontWeight: 500,
              marginLeft: 10,
            })}
          >
            Chaart
          </div></div>
          
        </div>
        <div
          css={mq({
            marginLeft: [0, 0, 40],
            display: ["none","block","block","block"]
          })}
        >
        
          <div
            css={mq({
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              Zindex: 1,
              marginTop: 50,
            })}
          >
           
            <img
              src="girl.jpg"
              css={mq({
                width: [150, 80, 150],
                borderRadius: "100%",
                height: "auto",
                zIndex: 1,
              })}
            />

            <div
              css={mq({
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: 50,
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 3,
                paddingBottom: 3,
                boxShadow: "0px 10px 21px -6px rgba(0,0,0,0.2)",
                zIndex: 2,
                marginTop: -20,
                color: "#310e3a",
              })}
            >
              {" "}
              <HiClock color={"#fd7e50"} />
              <div > 28h</div>
            </div>

            <div
              css={mq({
                marginTop: 30,
                fontWeight: 500,
                fontSize: 18,
                color: "#310e3a",
              })}
            >
              Dupe Adetunji
            </div>
            <div
              css={mq({
                marginTop: 10,
                color: "#c1b6c4",
                fontWeight: 300,
                fontSize: 18,
              })}
            >
              dupaadetunji@gmail.com
            </div>
          </div>
          <div
            css={mq({
              
              display: ["none","block","block","block"],
              marginTop: 50,
            })}
          >
           
           
            

            <ul
              css={mq({
                listStyleType: "none",
              })}
            >
                <li css={mq({
                  cursor: "pointer",
                })} onClick={() => setTab("a")}>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    fontSize: 20,
                    color: tab == "a"? "#310e3a" : "#c1b6c4",
                  })}
                >
                  <AiOutlineHome color={ tab == "a"? "#310e3a" : "#c1b6c4"} />
                  <div
                    css={mq({
                      fontWeight: 500,
                      fontSize: 18,
                      marginLeft: 10,
                    })}
                  >
                    Dashboard
                  </div>
                </div>
              </li>
              <li css={mq({
                  cursor: "pointer",
                })} onClick={() => setTab("b")}>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                    fontSize: 20
                  })}
                >
                  <AiOutlinePieChart color={tab == "b"? "#310e3a" : "#c1b6c4"} />
                  <div
                    css={mq({
                      marginLeft: 10,
                      fontWeight: 500,
                      fontSize: 18,
                      color: tab == "b"? "#310e3a" : "#c1b6c4",
                    })}
                  >
                    Analytics
                  </div>
                </div>
              </li>
              
              <li css={mq({
                  cursor: "pointer",
                })} onClick={() => setTab("c")}>
                {" "}
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                     fontSize: 20
                  })}
                >
                  <AiOutlineUnorderedList color={tab == "c"? "#310e3a" : "#c1b6c4"} />
                  <div
                    css={mq({
                      marginLeft: 10,
                      fontWeight: 500,
                      fontSize: 18,
                      color: tab == "c"? "#310e3a" : "#c1b6c4",
                    })}
                  >
                    Task List
                  </div>
                </div>
              </li>
              <li css={mq({
                  cursor: "pointer",
                })} onClick={() => setTab("d")}>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                    fontSize: 20
                  })}
                >
                  <AiOutlineClockCircle color={tab == "d"? "#310e3a" : "#c1b6c4"} />
                  <div
                    css={mq({
                      marginLeft: 10,
                      fontWeight: 500,
                      fontSize: 18,
                      color: tab == "d"? "#310e3a" : "#c1b6c4",
                    })}
                  >
                    Tracking
                  </div>
                </div>
              </li>
              <li css={mq({
                  cursor: "pointer",
                })} onClick={() => setTab("e")}>
                <div
                  css={mq({
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                    fontSize: 20
                  })}
                >
                  <AiOutlineSetting color={tab == "e"? "#310e3a" : "#c1b6c4"} />
                  <div
                    css={mq({
                      marginLeft: 10,
                      fontWeight: 500,
                      fontSize: 18,
                      color: tab == "e"? "#310e3a" : "#c1b6c4",
                    })}
                  >
                    Setting
                  </div>
                </div>
              </li>
              
              
              
            </ul>
          </div>
        </div>
      </div>
      <div css={mq({
        height: "80%",
        marginTop: 50,
        marginLeft: 50,
        borderRadius: 50,
        width: 1,
        backgroundColor: "#c1b6c4"
      })}></div>
</div>
      <div css={mq({
        flex: "100%",
      })}>{props.children}</div>
    </div>
  );
};

export default Nav;
