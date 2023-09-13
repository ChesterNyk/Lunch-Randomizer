import { AppBar, Toolbar, Typography } from "@mui/material";

const TopNav: React.FC = () => {
    return (
        <AppBar>
            <Toolbar title = "Application Title">
                <Typography>
                    Lunch Randomizer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default TopNav;