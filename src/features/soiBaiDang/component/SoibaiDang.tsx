import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import styles from "./SoiBaiDang.module.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useLocation } from "react-router-dom";
export default function SoiBaiDang() {
    const { state } = useLocation();
    console.log(state);
    
    const rows = [
        {
            id: 1,
            Ngay: "12/12/2000",
            Giá: "3 tỷ",
            SĐT: "089823789",
            MoTa: "Căn chugn cư Hà Nôi có giá Căn chugn cư Hà Nôi có giá"
        },
        {
            id: 2,
            Ngay: "12/12/2000",
            Giá: "3 tỷ",
            SĐT: "089823789",
            MoTa: "Căn chugn cư Hà Nôi có giá Căn chugn cư Hà Nôi có giá"
        },
        {
            id: 3,
            Ngay: "12/12/2000",
            Giá: "3 tỷ",
            SĐT: "089823789",
            MoTa: "Căn chugn cư Hà Nôi có giá Căn chugn cư Hà Nôi có giá"
        },
        {
            id: 4,
            Ngay: "12/12/2000",
            Giá: "3 tỷ",
            SĐT: "089823789",
            MoTa: "Căn chugn cư Hà Nôi có giá Căn chugn cư Hà Nôi có giá"
        },
        {
            id: 5,
            Ngay: "12/12/2000",
            Giá: "3 tỷ",
            SĐT: "089823789",
            MoTa: "Căn chugn cư Hà Nôi có giá Căn chugn cư Hà Nôi có giá"
        },
        {
            id: 6,
            Ngay: "12/12/2000",
            Giá: "3 tỷ",
            SĐT: "089823789",
            MoTa: "Căn chugn cư Hà Nôi có giá Căn chugn cư Hà Nôi có giá"
        },

    ];

    const data = [
        { month: "T1", value: 10 },
        { month: "T2", value: 20 },
        { month: "T3", value: 15 },
        { month: "T4", value: 30 },
        { month: "T5", value: 30 },
        { month: "T6", value: 10 },
        { month: "T7", value: 20 },
        { month: "T8", value: 15 },
        { month: "T9", value: 30 },
        { month: "T10", value: 10 },
        { month: "T11", value: 20 },
        { month: "T12", value: 15 },
    ];
    return (
        <Grid className={styles.container}>
            <Grid className={styles.wrapTitleFilter}>
                <Grid className={styles.titleFilter}>
                    <TextField
                        multiline
                        fullWidth
                        minRows={4}
                        maxRows={4}
                        placeholder={state.keyword}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    border: "none",
                                },
                            },
                            "& textarea": {

                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            },
                            "& textarea::-webkit-scrollbar": {
                                display: "none",
                            },
                        }}
                    />
                    <Button className={styles.buttonSOI} variant="contained"
                        sx={{
                            position: "absolute",
                            right: 10,
                            bottom: 10,
                            backgroundColor: "#1976d2",
                            "&:hover": {
                                backgroundColor: "#1565c0",
                            },
                        }}>SOI</Button>
                </Grid>
            </Grid>
            <Grid className={styles.wrapTabData}>
                <Grid className={styles.data}>
                    <Grid className={styles.titleData}>Giá</Grid>
                    <Grid className={styles.tabData}>12343465456</Grid>
                </Grid>
                <Grid className={styles.data}>
                    <Grid className={styles.titleData}>Giá/m2</Grid>
                    <Grid className={styles.tabData}>12343465456</Grid>
                </Grid>
                <Grid className={styles.data}>
                    <Grid className={styles.titleData}>Diện tích</Grid>
                    <Grid className={styles.tabData}>12343465456</Grid>
                </Grid>
                <Grid className={styles.data}>
                    <Grid className={styles.titleData}>Xã/Phường</Grid>
                    <Grid className={styles.tabData}>12343465456</Grid>
                </Grid>
                <Grid className={styles.data}>
                    <Grid className={styles.titleData}>Tỉnh</Grid>
                    <Grid className={styles.tabData}>12343465456</Grid>
                </Grid>
                <Grid className={styles.data}>
                    <Grid className={styles.titleData}>Loại hình</Grid>
                    <Grid className={styles.tabData}>12343465456</Grid>
                </Grid>
                <Grid className={styles.data}>
                    <Grid className={styles.titleData}>SĐT</Grid>
                    <Grid className={styles.tabData}>12343465456</Grid>
                </Grid>
            </Grid>
            <Grid className={styles.WrapDataUser}>
                <Grid className={styles.dataLeft}>
                    <Grid className={styles.dataLeft1}>
                        <Grid className={styles.soTinTrung}>15 tin tương tự</Grid>
                        <Grid className={styles.soNgDangTin}>6 người cùng đăng tin này</Grid>
                        <Grid className={styles.table}>
                            <TableContainer component={Paper}>
                                <Table sx={{ tableLayout: "fixed" }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Ngày</TableCell>
                                            <TableCell>Giá</TableCell>
                                            <TableCell>SĐT</TableCell>
                                            <TableCell>Mô tả</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {rows.slice(0, 3).map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell>{row.Ngay}</TableCell>
                                                <TableCell>{row.Giá}</TableCell>
                                                <TableCell>{row.SĐT}</TableCell>
                                                <TableCell sx={{
                                                    maxWidth: 200,
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                }}>{row.MoTa}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid className={styles.chiTiet}>Xem chi tiết</Grid>
                    </Grid>
                    <Grid className={styles.dataLeft2}>
                        <Grid className={styles.soTinTrung}>Hồ sơ người đăng</Grid>
                        <Grid className={styles.wrapDesUser}>
                            <Grid className={styles.tab}>SĐT</Grid>
                            <Grid>098782374</Grid>
                        </Grid>
                        <Grid className={styles.wrapDesUser}>
                            <Grid className={styles.tab}>Số bài đăng tìm thấy</Grid>
                            <Grid>210</Grid>
                        </Grid>
                        <Grid className={styles.wrapDesUser}>
                            <Grid className={styles.tab}>Ước tình tần suất đăng bài / ngày</Grid>
                            <Grid>10</Grid>
                        </Grid>
                        <Grid className={styles.chiTiet2}>Xem chi tiết</Grid>
                    </Grid>
                </Grid>
                <Grid className={styles.dataRight}>
                    <Grid className={styles.lichsu}>Lịch sử đăng tin</Grid>
                    <ResponsiveContainer width="100%" height={600}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#1976d2" />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </Grid>
    );
}