import { Button, Grid, TextField } from "@mui/material";
import styles from "./Home.module.css";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function TuViTable() {
  const [open, setOpen] = useState<boolean>(true);
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    navigate("/soitindang", {
      state: {
        keyword,
      },
    });
  };

    const handleSearchPhankhuc = () => {
    navigate("/soiphankhuc");
  };

  const tilleFilter = useMemo(() => {
    if (open) {
      return <>
        <Grid className={styles.wrapButton}>
          <Grid onClick={() => {
            setOpen(true)
          }} className={styles.buttonOpen}>Dự án</Grid>
          <Grid onClick={() => {
            setOpen(false)
          }} className={styles.button}>Nhà đất</Grid>
        </Grid>
      </>
    }

    return <>
      <Grid className={styles.wrapButton}>
        <Grid onClick={() => {
          setOpen(true)
        }} className={styles.button}>Dự án</Grid>
        <Grid onClick={() => {
          setOpen(false)
        }} className={styles.buttonOpen}>Nhà đất</Grid>
      </Grid>
    </>;
  }, [open]);

  const filter = useMemo(() => {
    if (open) {
      return <>
        <Grid className={styles.wrapInput}>
          <TextField
            sx={{
              width: "88%", margin: "16px 32px",

              "& .MuiInputBase-input": {
                fontSize: "18px",
                padding: "12px",
              },
            }}
            label="Loại hình" variant="outlined" />
          <TextField sx={{
            width: "88%", margin: "16px 32px",
            "& .MuiInputBase-input": {
              fontSize: "18px",
              padding: "12px",
            },
          }} label="Tòa / Khu" variant="outlined" />
        </Grid>
      </>
    }

    return <>
      <Grid className={styles.wrapInput}>
        <TextField
          sx={{
            width: "88%", margin: "16px 32px",

            "& .MuiInputBase-input": {
              fontSize: "18px",
              padding: "12px",
            },
          }}
          label="Loại hình" variant="outlined" />
        <TextField sx={{
          width: "88%", margin: "16px 32px",
          "& .MuiInputBase-input": {
            fontSize: "18px",
            padding: "12px",
          },
        }} label="Tỉnh" variant="outlined" />
        <TextField sx={{
          width: "88%", margin: "16px 32px",
          "& .MuiInputBase-input": {
            fontSize: "18px",
            padding: "12px",
          },
        }} label="Xã / Phường" variant="outlined" />
      </Grid>
    </>;
  }, [open]);

  return (
    <Grid className={styles.container}>
      <Grid className={styles.tab1}>
        <Grid className={styles.title1}>Soi tin đăng</Grid>
        <TextField
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          multiline
          fullWidth
          minRows={4}
          maxRows={4}
          placeholder="Hãy nhập thông tin bất động sản mà bạn cần biết thông tin ..."
          sx={{
            height: "70%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
            "& textarea": {
              textAlign: "center",
              color: "black",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            },
            "& textarea::-webkit-scrollbar": {
              display: "none",
            },
          }}
        />
        <Grid className={styles.buttonSOI}>
          <Button onClick={handleSearch} variant="contained"
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}>SOI</Button>
        </Grid>
      </Grid>
      <Grid className={styles.tab2}>
        <Grid className={styles.title1}>Soi phân khúc</Grid>
        <Grid className={styles.contentOption}>
          {tilleFilter}
          {filter}
        </Grid>
        <Grid className={styles.buttonSOI}>
          <Button
          onClick={handleSearchPhankhuc}
            variant="contained"
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}>SOI</Button>
        </Grid>

      </Grid>
    </Grid>
  );
}