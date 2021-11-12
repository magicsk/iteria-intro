import { Avatar, Box, Button, Heading } from 'grommet';
interface Props {
  appName: string,
  appIcon: JSX.Element,
}

export const AppHeader = ({
  appName,
  appIcon,
}: Props): JSX.Element => (
    <Box
        tag="header"
        direction="row"
        background="brand"
        align="center"
        elevation="medium"
        justify="between"
        responsive={false}
        pad={{ vertical: 'xsmall' }}
        style={{ position: 'relative' }}
    >
        <Button>
            <Box
                flex={false}
                direction="row"
                align="center"
                margin={{ left: 'small' }}
            >
                {appIcon}
                <Heading level="4" margin={{ left: 'small', vertical: 'none' }}>
                    {appName}
                </Heading>
            </Box>
        </Button>

        <Box direction="row" align="center" margin={{ right: 'medium' }} style={{ cursor: 'pointer' }}>
            <Avatar background="#ffb3b3">
                🤖
            </Avatar>
            <Heading level="5" margin={{ left: 'small', vertical: 'none' }}>
                John Wireman
            </Heading>
        </Box>
    </Box>
);