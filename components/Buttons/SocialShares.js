import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Tooltip } from '@material-ui/core';
const SocialShares = () => {
  return (
    <React.Fragment>
      <Tooltip title="Share to Facebook"><FacebookIcon/></Tooltip>
      <Tooltip title="Share to Twitter"><TwitterIcon/></Tooltip>
      <Tooltip title="Copy link"><FileCopyIcon/></Tooltip>
    </React.Fragment>
  );
};

export default SocialShares;