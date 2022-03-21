import { css, jsx } from "@emotion/react";
import Nav from "./nav"
import facepaint from "facepaint";
import {motion} from "framer-motion"

import { GrFormSearch } from "react-icons/gr";
import { CgBell } from "react-icons/cg";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMenu } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";




const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Body = () => {

  return (
    <Nav>
    <div
      css={mq({
        display: "flex",
        flexDirection: "column",
        backgroundColor: ["#ffffff","#ffffff","#fbf5ee","#fbf5ee"],
        paddingLeft: [20,0,0,0],
        paddingRight:  [20,0,0,0],
      })}
    >
      <div
        css={mq({
          display: "flex",
          flexDirection: ["column","column","row","row"]
        })}
      >
        <div
          css={mq({
            flex: ["100%","100%","75%","75%"],

            backgroundColor: "#ffffff",
            borderRadius: [0,0,"0px 50px 50px 0px","0px 50px 50px 0px"],
            paddingLeft: [0,20,50,50],
            paddingRight: [0,20,50,50],
          })}
        >
          <div
            css={mq({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 50,
              display: ["none","flex","flex","flex"],
              
            })}
          >
            <div css={mq({
             
            })}>
              <div
                css={mq({
                  fontSize: [22,25,25,25],
                  color: "#310e3a",
                  fontWeight: 600,
                })}
              >
                Hello, Dupe
              </div>
              <div
                css={mq({
                  fontSize: [16,18,18,18],
                  fontWeight: 300,
                  color: "#c4c4c4",
                  marginTop: 10,
                })}
              >
                Today is Monday, 20 of October 2021
              </div>
            </div>
            <div
              css={mq({
                display: "flex",
              })}
            >
              
              <div
                css={mq({
                  display: ["none","flex","none","none"],
                  justifyContent: "center",
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: ["#f5f5f5","#fbf5ee","#f5f5f5","#f5f5f5"],
                  fontSize: 25,
                  marginLeft: 20,
                  cursor: "pointer",
                  boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
                })}
              >
                <BiMenuAltRight />
              </div>
              <div
                css={mq({
                  display: ["none","flex","flex","flex"],
                  justifyContent: "center",
                  padding: 10,
                  borderRadius: 10,
                  marginLeft: [0,20,0,0],
                  backgroundColor: ["#f5f5f5","#fbf5ee","#f5f5f5","#f5f5f5"],
                  fontSize: [35,25,35,35],
                  cursor: "pointer",
                  boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
                })}
              >
                <GrFormSearch />
              </div>
              <div
                css={mq({
                  display: ["none","flex","none","none"],
                  justifyContent: "center",
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: ["#f5f5f5","#fbf5ee","#f5f5f5","#f5f5f5"],
                  fontSize: 25,
                  marginLeft: 20,
                  boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                })}
              >
                <CgBell />
              </div>
              <div
                css={mq({
                  display: ["none","flex","none","none"],
                  justifyContent: "center",
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: ["#f5f5f5","#fbf5ee","#f5f5f5","#f5f5f5"],
                  fontSize: 25,
                  marginLeft: 20,
                  boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                })}
              >
                <AiOutlinePlus />
              </div>
              
              <div css={mq({
                 display: ["none","none","flex","flex"],
              })}>
                <button
                  css={mq({
                    backgroundColor: "#000",
                    cursor: "pointer",
                    borderRadius: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 15,
                    paddingBottom: 15,
                    outline: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: 18,
                    fontFamily: "Fredoka",
                    marginLeft: 20,
                  })}
                >
                  Add New Project
                </button>
              </div>
            </div>
          </div>

          <div
            css={mq({
              marginTop: [0,50,50,50],
              display: "flex",
              flexDirection: ["column","row","row","row"],
              justifyContent: "space-between",
              alignItems: "center",
            })}
          >
            <div
              css={mq({
                width: ["100%",230,230,230],
                backgroundColor: "#976ea0",
                borderRadius: 10,
                padding: 20,
                
              })}
            >
              <div
                css={mq({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                })}
              >
                <div
                  css={mq({
                    display: "flex",
                  })}
                >
                  <div
                    css={mq({
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 15,
                      borderRadius: "100%",
                      border: "solid",
                      borderColor: "#976ea0",
                      borderWidth: 2,
                      backgroundColor: "#000",
                      fontSize: 15,
                      color: "#fff",
                      zIndex: 3,
                    })}
                  >
                    +7
                  </div>
                  <img
                    src="girl.jpg"
                    css={mq({
                      width: [50, 50, 50],
                      borderRadius: "100%",
                      height: "auto",
                      border: "solid",
                      borderColor: "#976ea0",
                      borderWidth: 2,
                      zIndex: 2,
                      marginLeft: -20,
                    })}
                  />
                  <img
                    src="girl.jpg"
                    css={mq({
                      width: [50, 50, 50],
                      borderRadius: "100%",
                      height: "auto",
                      border: "solid",
                      borderColor: "#976ea0",
                      borderWidth: 2,
                      zIndex: 1,
                      marginLeft: -20,
                    })}
                  />
                </div>
                <div
                  css={mq({
                    fontSize: 25,
                    cursor: "pointer",
                  })}
                >
                  <BsThreeDotsVertical color="rgba(255,255,255,0.44)" />
                </div>
              </div>
              <div
                css={mq({
                  marginTop: 20,
                  color: "#fff",
                  fontSize: 25,
                  fontWeight: 500,
                })}
              >
                <div css={mq({})}>Web</div>
                <div> Development</div>
              </div>
              <div
                css={mq({
                  marginTop: 20,
                })}
              >
                <div
                  css={mq({
                    color: "rgba(255,255,255,0.44)",
                    ":hover": {
                      color: "#ffffff"
                    }
                  })}
                >
                  10 task | 96%
                </div>
                <div
                  css={mq({
                    border: "none",
                    marginTop: 10,
                    borderRadius: 50,
                    backgroundColor: "rgba(0,0,0,0.39)",
                  })}
                >
                 <motion.div animate={{ width:"96%" }} initial={{width:"0%"}} transition={{ ease: "easeOut", duration: 1 }}
                    css={mq({
                      height: 10,
                      backgroundColor: "#fff",
                      // width: "96%",
                      borderRadius: 50,
                      display: "flex",
                      justifyContent: "right",
                    })}
                  ></motion.div>
                </div>
              </div>
            </div>
            <div
              css={mq({
                width: ["100%",230,230,230],
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: "#95cfd5",
                borderRadius: 10,
                padding: 20,
                marginTop: [20,0,0,0]
              })}
            >
              <div
                css={mq({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                })}
              >
                <div
                  css={mq({
                    display: "flex",
                  })}
                >
                  <div
                    css={mq({
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 15,
                      borderRadius: "100%",
                      border: "solid",
                      borderColor: "#95cfd5",
                      borderWidth: 2,
                      backgroundColor: "#000",
                      fontSize: 15,
                      color: "#fff",
                      zIndex: 3,
                    })}
                  >
                    +7
                  </div>
                  <img
                    src="girl.jpg"
                    css={mq({
                      width: [50, 50, 50],
                      borderRadius: "100%",
                      height: "auto",
                      border: "solid",
                      borderColor: "#95cfd5",
                      borderWidth: 2,
                      zIndex: 2,
                      marginLeft: -20,
                    })}
                  />
                  <img
                    src="girl.jpg"
                    css={mq({
                      width: [50, 50, 50],
                      borderRadius: "100%",
                      height: "auto",
                      border: "solid",
                      borderColor: "#95cfd5",
                      borderWidth: 2,
                      zIndex: 1,
                      marginLeft: -20,
                    })}
                  />
                </div>
                <div
                  css={mq({
                    fontSize: 25,
                    cursor: "pointer",
                  })}
                >
                  <BsThreeDotsVertical color="rgba(255,255,255,0.44)" />
                </div>
              </div>
              <div
                css={mq({
                  marginTop: 20,
                  color: "#fff",
                  fontSize: 25,
                  fontWeight: 500,
                })}
              >
                <div css={mq({})}>App</div>
                <div> Development</div>
              </div>
              <div
                css={mq({
                  marginTop: 20,
                })}
              >
                <div
                  css={mq({
                    color: "rgba(255,255,255,0.44)",
                    ":hover": {
                      color: "#ffffff"
                    }
                  })}
                >
                  12 task | 40%
                </div>
                <div
                  css={mq({
                    border: "none",
                    marginTop: 10,
                    borderRadius: 50,
                    backgroundColor: "rgba(0,0,0,0.39)",
                  })}
                >
                  <motion.div animate={{ width:"40%" }} initial={{width:"0%"}} transition={{ ease: "easeOut", duration: 1, delay: 0.3, }}
                    css={mq({
                      height: 10,
                      backgroundColor: "#fff",
                      // width: "40%",
                      borderRadius: 50,
                      display: "flex",
                      justifyContent: "right",
                    })}
                  ></motion.div>
                </div>
              </div>
            </div>
            <div
              css={mq({
                width: ["100%",230,230,230],
                backgroundColor: "#fd7e50",
                borderRadius: 10,
                padding: 20,
                marginTop: [20,0,0,0]
              })}
            >
              <div
                css={mq({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                })}
              >
                <div
                  css={mq({
                    display: "flex",
                  })}
                >
                  <div
                    css={mq({
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 15,
                      borderRadius: "100%",
                      border: "solid",
                      borderColor: "#fd7e50",
                      borderWidth: 2,
                      backgroundColor: "#000",
                      fontSize: 15,
                      color: "#fff",
                      zIndex: 3,
                    })}
                  >
                    +7
                  </div>
                  <img
                    src="girl.jpg"
                    css={mq({
                      width: [50, 50, 50],
                      borderRadius: "100%",
                      height: "auto",
                      border: "solid",
                      borderColor: "#fd7e50",
                      borderWidth: 2,
                      zIndex: 2,
                      marginLeft: -20,
                    })}
                  />
                  <img
                    src="girl.jpg"
                    css={mq({
                      width: [50, 50, 50],
                      borderRadius: "100%",
                      height: "auto",
                      border: "solid",
                      borderColor: "#fd7e50",
                      borderWidth: 2,
                      zIndex: 1,
                      marginLeft: -20,
                    })}
                  />
                </div>
                <div
                  css={mq({
                    fontSize: 25,
                    cursor: "pointer",
                  })}
                >
                  <BsThreeDotsVertical color="rgba(255,255,255,0.44)" />
                </div>
              </div>
              <div
                css={mq({
                  marginTop: 20,
                  color: "#fff",
                  fontSize: 25,
                  fontWeight: 500,
                })}
              >
                <div css={mq({})}>Social Media</div>
                <div> Management</div>
              </div>
              <div
                css={mq({
                  marginTop: 20,
                })}
              >
                <div
                  css={mq({
                    color: "rgba(255,255,255,0.44)",
                    ":hover": {
                      color: "#ffffff"
                    }
                  })}
                >
                  5 task | 20%
                </div>
                <div
                  css={mq({
                    border: "none",
                    marginTop: 10,
                    borderRadius: 50,
                    backgroundColor: "rgba(0,0,0,0.39)",
                  })}
                >
                  <motion.div animate={{ width:"20%" }} initial={{width:"0%"}} transition={{ ease: "easeOut", duration: 1, delay: 0.6, }}
                    css={mq({
                      height: 10,
                      backgroundColor: "#fff",
                      // width: "20%",
                      borderRadius: 50,
                      display: "flex",
                      justifyContent: "right",
                    })}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
          <div css={mq({
             marginTop: 100,
            display: "flex",
            flexDirection: ["column","row","row","row"]
           
          })}>
          <div css={mq({
            flex: "50%"
          })} >
            <div css={mq({
           color: "#310e3a",
            fontSize: 18,
            fontWeight: 600
          })}>
            Tasks For Today
            </div>
            <div  css={mq({
              border: "solid",
marginTop: 20,
              borderWidth: 1,
              borderLeftWidth: 10,
              borderColor: "transparent",
              borderLeftColor: "#fd7e50",
              boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
              paddingTop: 20,
              paddingBottom:20,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 10,
              width: ["100%",300,300,300],
              
            })}>
              <div  css={mq({
              
              color: "#310e3a",
                fontWeight: 500,
                fontSize: 18,
              })}>Mobile App</div>
              <div  css={mq({
                marginTop: 10,
                color: "#c1b6c4",
                fontWeight: 300,
                fontSize: 15,
              })}>Prepare Figma File</div>
            </div>
            <div  css={mq({
              border: "solid",
marginTop: 20,
              borderWidth: 1,
              borderLeftWidth: 10,
              borderColor: "transparent",
              borderLeftColor: "#976ea0",
              boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
              paddingTop: 20,
              paddingBottom:20,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 10,
              width: ["100%",300,300,300],
              
            })}>
              <div  css={mq({
              color: "#310e3a",
               
                fontWeight: 500,
                fontSize: 18,
              })}>UX Wireframes</div>
              <div  css={mq({
                marginTop: 10,
                color: "#c1b6c4",
                fontWeight: 300,
                fontSize: 15,
              })}>Design UX Wireframes</div>
            </div>
            <div  css={mq({
              border: "solid",
marginTop: 20,
              borderWidth: 1,
              borderLeftWidth: 10,
              borderColor: "transparent",
              borderLeftColor: "#95cfd5",
              boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
              paddingTop: 20,
              paddingBottom:20,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 10,
              width: ["100%",300,300,300],
              
            })}>
              <div  css={mq({
              color: "#310e3a",
               
                fontWeight: 500,
                fontSize: 18,
              })}>Mobile App</div>
              <div  css={mq({
                marginTop: 10,
                color: "#c1b6c4",
                fontWeight: 300,
                fontSize: 15,
              })}>Research</div>
            </div>
            </div >
           <div css={mq({
            flex: "50%"
          })}> <div css={mq({
            color: "#310e3a",
            fontSize: 18,
            fontWeight: 600,
            marginTop: [50,0,0,0]
          })}>
            Statistics
            </div>
            
            <div css={mq({
              marginTop: 20,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            })}><div css={mq({
              width: 100,
              backgroundColor: "#f5f4f5",
              borderRadius: 10,
              padding: 20,
              
            })}><div css={mq({
              color: "#310e3a",
              fontWeight: 500,
                fontSize: 20,
            })}>28 h</div>
            <div css={mq({
              marginTop: 10,
              color: "#310e3a",
              fontWeight: 300,
              fontSize: 15,
            })}>Tracked Time</div>
            </div>
            <div css={mq({
              width: 100,
              backgroundColor: "#f5f4f5",
              borderRadius: 10,
              padding: 20,

            })}><div css={mq({
              color: "#310e3a",
              fontWeight: 500,
                fontSize: 20,
            })}>18</div>
            <div css={mq({
              marginTop: 10,
              color: "#310e3a",
              fontWeight: 300,
              fontSize: 15,
            })}>Finished Tasks</div></div>
            <div css={mq({
              width: 100,
              
              border: "dashed",
              borderColor: "#f5f4f5",
              borderWidth: 2,
              borderRadius: 10,
              padding: 20
            })}><div css={mq({
              
              cursor: "pointer",
                fontSize: 20,
            })}><MdAddCircle color="#310e3a"  /></div>
            <div css={mq({
              marginTop: 10,
              color: "#310e3a",
              fontWeight: 300,
              fontSize: 15,
            })}>Tracked Time</div></div>
            </div>

            <div css={mq({
              width: "100%",
              display: "flex",
              overflow: "hidden",
              flexDirection: "column",
              alignItems: "start",
              height: 150,
              boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
              borderRadius: 10,
              marginTop: 50,
              marginBottom: 50,
              padding: 20
            })}>
              <div css={mq({
              color: "#310e3a",
              fontWeight: 500,
                fontSize: 25,
            })}>$9.99/month</div>
            <div css={mq({
              marginTop: 10,
              color: "#310e3a",
              fontWeight: 500,
                fontSize: 20,
            })}>Pro plan</div>
            <div css={mq({
              marginTop: 10,
              color: "#310e3a",
              fontWeight: 300,
              fontSize: 15,
            })}>More Productivity with pro plan</div>
            
            <img
            src="blob.svg"
            css={mq({
             position: "relative",
             bottom: 100,
             left: 150
            })}
          />
            
            </div>
            
            </div>
          </div>
        </div>

        <div
          css={mq({
            flex: ["25%","100%","25%","25%"],
            display: "flex",
           
            flexDirection: "column",
            paddingLeft: [0,30,30,30],
            paddingRight: [0,10,30,30],
            marginTop: [30,60,60,60],
            marginBottom: [50,0,0,0],
            display: ["none","none","block","block"]
          })}
        >
          <div
            css={mq({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            })}
          >
            <div
              css={mq({
                fontSize: 18,

                fontWeight: 600,
              })}
            >
              Calender
            </div>
            <div
              css={mq({
                display: "flex",
                justifyContent: "center",
                padding: 10,
                borderRadius: 10,
                backgroundColor: "#ffffff",
                fontSize: 20,
                cursor: "pointer",
                boxShadow: "7px 12px 18px -4px rgba(0,0,0,0.08)",
              })}
            >
              <CgBell />
            </div>
          </div>
          <div css={mq({
            marginTop: 50
          })}>
            <div
            css={mq({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            })}
          >
            <div css={mq({
              
              color: "#310e3a",
              fontWeight: 400,
              fontSize: 15,
            })}>Oct 20, 2021</div>
            <div
              css={mq({
                cursor: "pointer",
              })}
            >
             <BsThreeDots  />
            </div>
          </div>

          <div
            css={mq({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20
            })}
          >
            <div css={mq({
              
              color: "#310e3a",
              fontWeight: 600,
              fontSize: 18,
            })}>11:01</div>
            <div
              
            >
              <div >
             
      <div css={mq({
       
                  
                     
      })}>
      <div
              css={mq({
                marginTop: 10,
                color: "#310e3a",
                fontWeight: 300,
                fontSize: 17,
              })}
            >
             Dribble shot
            </div>
             <div css={mq({
              marginTop: 10,
              color: "#310e3a",
              fontWeight: 600,
              fontSize: 17,
            })}>Facebook brand</div></div></div>
            </div>
          </div>
          <div
            css={mq({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20
            })}
          >
            <div css={mq({
              
              color: "#310e3a",
              fontWeight: 600,
              fontSize: 18,
            })}>11:01</div>
            <div
              
            >
              <div >
             
      <div css={mq({
       
                  
                     
      })}>
      <div
              css={mq({
                marginTop: 10,
                color: "#310e3a",
                fontWeight: 300,
                fontSize: 17,
              })}
            >
             Dribble shot
            </div>
             <div css={mq({
              marginTop: 10,
              color: "#310e3a",
              fontWeight: 600,
              fontSize: 17,
            })}>Facebook brand</div></div></div>
            </div>
          </div>
          </div>
          <div css={mq({
            marginTop: 50
          })}>
            <div
            css={mq({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            })}
          >
            <div css={mq({
              
              color: "#310e3a",
              fontWeight: 400,
              fontSize: 15,
            })}>Oct 18, 2021</div>
            <div
              css={mq({
                cursor: "pointer",
              })}
            >
             <BsThreeDots  />
            </div>
          </div>

          <div
            css={mq({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20
            })}
          >
            <div css={mq({
              
              color: "#310e3a",
              fontWeight: 600,
              fontSize: 18,
            })}>6:01</div>
            <div
              
            >
              <div >
             
      <div css={mq({
       
                  
                     
      })}>
      <div
              css={mq({
                marginTop: 10,
                color: "#310e3a",
                fontWeight: 300,
                fontSize: 17,
              })}
            >
             Design
            </div>
             <div css={mq({
              marginTop: 10,
              color: "#310e3a",
              fontWeight: 600,
              fontSize: 17,
            })}>Pintrest brand</div></div></div>
            </div>
          </div>
          <div
            css={mq({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20
            })}
          >
            <div css={mq({
              
              color: "#310e3a",
              fontWeight: 600,
              fontSize: 18,
            })}>11:01</div>
            <div
              
            >
              <div >
             
      <div css={mq({
       
                  
                     
      })}>
      <div
              css={mq({
                marginTop: 10,
                color: "#310e3a",
                fontWeight: 300,
                fontSize: 17,
              })}
            >
             Design
            </div>
             <div css={mq({
              marginTop: 10,
              color: "#310e3a",
              fontWeight: 600,
              fontSize: 17,
            })}>Pintrest brand</div></div></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div></Nav>
  );
};

export default Body;
