import { Popover } from 'react-tiny-popover';
import React from 'react';
import axios from "../../axios/axios";
import { jsonParser } from '../../helpers/util';
import {ADMIN} from "../../helpers/constants";
import {useEnsureRoom} from "@livekit/components-react";

const ScreenSharePopover = ({ open }: any) => {

  const room = useEnsureRoom()

  // USE THIS TO HANDLE SCREEN SHARE TYPE
  const handleScreenShareTYpe = async (shareType: boolean) => {
    await axios
      .put(
        `/room/multiShare/${room.name}`,
        {
          multiShare: shareType,
          metaData: {
            ...jsonParser(room?.metadata),
            multiShare: shareType,
          },
        },
        /* {
          headers: {
            Authorization: `Bearer ${getSessionItem(TOKEN)}`,
          },
        }, */
      )
      .catch((err) => {
        console.error(err.message);
      });
  };

  const callMultiShare = () => {
    handleScreenShareTYpe(true);
  };

  const callSingleShare = () => {
    handleScreenShareTYpe(false);
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
            label: `${
              !jsonParser(room?.metadata)?.multiShare ? '✔ ' : ''
            } One participant can share at a time`,
            onClick: callSingleShare,
            role: ADMIN,
          },
          {
            label: `${
              jsonParser(room?.metadata)?.multiShare ? '✔ ' : ''
            } Multiple participants can share at a time`,
            onClick: callMultiShare,
            role: ADMIN,
          },
        ],
      },
      /* {
        items: [
          {
            label: 'Advance sharing options',
            role: ADMIN,
          },
        ],
      }, */
    ];
  };

  const participantPopover = () => {
    return (
      <div className={`popoverMenu`}>
        <div className='list'>
          {getPopList()?.map((item: any, i: number) => {
            return (
              actionHandler(item?.role) && (
                <div key={i}>
                  <p className="m-0 mt-2 mb-1 font-bold" style={{ fontSize: 12 }}>
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
    <Popover isOpen={open} positions={['top']} content={participantPopover}>
      <div />
    </Popover>
  );
};

export default ScreenSharePopover;
