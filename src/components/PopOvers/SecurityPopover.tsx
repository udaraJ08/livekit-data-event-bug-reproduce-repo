import { Popover } from 'react-tiny-popover';
import React from 'react';
import axios from "../../axios/axios";
import {jsonParser} from "../../helpers/util";
import {ADMIN} from "../../helpers/constants";

const SecurityPopover = ({ setSecurityModalOpen, open, room }: any) => {
  // USE THIS TO HANDLE SCREEN SHARE BLOCK
  const handleScreenShareType = async () => {
    await axios
      .put(`/room/blockShareScreen/${room.name}`, {
        metaData: {
          ...jsonParser(room?.metadata),
          shareScreenBlock: !jsonParser(room?.metadata)?.shareScreenBlock,
        },
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // USE THIS TO HANDLE SCREEN SHARE TYPE
  const handlePrivateChatBlock = async () => {
    await axios
      .put(`/room/blockMessageInChat/${room.name}`, {
        metaData: {
          ...jsonParser(room?.metadata),
          messageInPrivateChatBlock: !jsonParser(room?.metadata)?.messageInPrivateChatBlock,
        },
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // USE THIS TO HANDLE SCREEN SHARE TYPE
  const handlePublicChatBlock = async () => {
    await axios
      .put(`/room/blockMessageInChat/${room.name}`, {
        metaData: {
          ...jsonParser(room?.metadata),
          messageInPublicChatBlock: !jsonParser(room?.metadata)?.messageInPublicChatBlock,
        },
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // USE THIS TO HANDLE THE ACTIONS BY ROLES
  const actionHandler = (role: string) => {
    if (!role) return true;

    return jsonParser(room?.localParticipant?.metadata)?.role === role;
  };

  const getPopList = () => {
    return [
      {
        items: [
          {
            label: `Lock Meeting`,
            onClick: () => setSecurityModalOpen(true),
            role: ADMIN,
          },
          // {
          //   label: `${jsonParser(room?.metadata)?.multiShare ? '✔ ' : ''} Lock Viewers`,
          //   role: ADMIN,
          // },
        ],
      },
      {
        topic: 'Allow Participants to: ',
        items: [
          {
            label: `${jsonParser(room?.metadata)?.shareScreenBlock ? '✔ ' : ''} Share Screen`,
            onClick: handleScreenShareType,
            role: ADMIN,
          },
          {
            label: `${
              jsonParser(room?.metadata)?.messageInPrivateChatBlock ? '✔ ' : ''
            } Private Chat blocked`,
            onClick: handlePrivateChatBlock,
            role: ADMIN,
          },
          {
            label: `${
              jsonParser(room?.metadata)?.messageInPublicChatBlock ? '✔ ' : ''
            } Public Chat blocked`,
            onClick: handlePublicChatBlock,
            role: ADMIN,
          },
        ],
      },
    ];
  };

  const securityPopover = () => {
    return (
      <div className={`popoverMenu`}>
        <div className='list'>
          {getPopList()?.map((item: any, i: number) => {
            return (
              actionHandler(item?.role) && (
                <div key={i}>
                  <p className="m-0 mt-2 mb-1 pl-4 font-bold" style={{ fontSize: 12 }}>
                    {item.topic}
                  </p>
                  <div className='listStyleNone'>
                    {item?.items?.map((e: any, index: number) => {
                      return (
                        actionHandler(e?.role) && (
                          <div onClick={e.onClick} className='popOverItem' key={index}>
                            {e?.label}
                          </div>
                        )
                      );
                    })}
                  </div>
                  {i !== getPopList().length - 1 &&
                    jsonParser(room?.localParticipant?.metadata)?.role === ADMIN && (
                      <hr
                        style={{
                          border: '1px solid #7f8c8d',
                        }}
                      />
                    )}
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Popover isOpen={open} positions={['top']} content={securityPopover}>
      <div />
    </Popover>
  );
};

export default SecurityPopover;
