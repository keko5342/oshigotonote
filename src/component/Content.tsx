import React from 'react';
import { Box } from '@material-ui/core';

function Content(props){
  return(
    <Box
      display="flex"
      flex={1}
      flexDirection="column"
    >
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        Unnamed Memory
        <p>呪われた王子と青い月の魔女の織りなす剣と魔法のファンタジー</p>
      </Box>
      <Box
        display="flex"
        flex={5}
        justifyContent="center"
      >
        <Box
          margin={1}
          flex={1}
          boxShadow={1}
        >
          トレンドツイート
        </Box>
        <Box
          marginTop={1}
          marginBottom={1}
          flex={1}
          boxShadow={2}
        >
          イラスト
        </Box>
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
        >
          <Box 
            margin={1}
            flex={1}
            boxShadow={3}
          >
            特典
          </Box>
          <Box
            margin={1}
            marginTop={0}
            flex={1}
            boxShadow={3}
          >
            グッズ
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Content;