import React from 'react'
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import styles from "./SoiPhanKhuc.module.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function SoiPhanKhuc() {
    const rows = [
        {
            id: 1,
            gia: "5 tỷ",
            dientich: "35m2",
            loai: "1PN",
            toa: "S204",
            ngay: "11/11/2000"
        },
        {
            id: 1,
            gia: "5 tỷ",
            dientich: "35m2",
            loai: "1PN",
            toa: "S204",
            ngay: "11/11/2000"
        }, {
            id: 1,
            gia: "5 tỷ",
            dientich: "35m2",
            loai: "1PN",
            toa: "S204",
            ngay: "11/11/2000"
        }, {
            id: 1,
            gia: "5 tỷ",
            dientich: "35m2",
            loai: "1PN",
            toa: "S204",
            ngay: "11/11/2000"
        }, {
            id: 1,
            gia: "5 tỷ",
            dientich: "35m2",
            loai: "1PN",
            toa: "S204",
            ngay: "11/11/2000"
        }, {
            id: 1,
            gia: "5 tỷ",
            dientich: "35m2",
            loai: "1PN",
            toa: "S204",
            ngay: "11/11/2000"
        }, {
            id: 1,
            gia: "5 tỷ",
            dientich: "35m2",
            loai: "1PN",
            toa: "S204",
            ngay: "11/11/2000"
        }, {
            id: 1,
            gia: "5 tỷ",
            dientich: "35m2",
            loai: "1PN",
            toa: "S204",
            ngay: "11/11/2000"
        }, {
            id: 1,
            gia: "5 tỷ",
            dientich: "35m2",
            loai: "1PN",
            toa: "S204",
            ngay: "11/11/2000"
        },

    ];

    const data = [
        { Giá: "Dưới 5 tỷ", "Số tin": 15 },
        { Giá: "5-6 tỷ", "Số tin": 30 },
        { Giá: "6-7 tỷ", "Số tin": 30 },
        { Giá: "7-8", "Số tin": 10 },
        { Giá: "Trên 8 tỷ", "Số tin": 20 },
    ];

    return (
        <Grid className={styles.container}>
            <Grid className={styles.content1}>
                <Grid className={styles.boxData}>
                    <Grid className={styles.titleBox}>Tổng phân tích</Grid>
                    <Grid className={styles.dataBox}>327 tin</Grid>
                    <Grid className={styles.dataBox2}>20 ngày gần nhất</Grid>
                </Grid>
                <Grid className={styles.boxData}>
                    <Grid className={styles.titleBox}>Giá chào bán thấp nhất</Grid>
                    <Grid className={styles.dataBox}>5 tỷ</Grid>
                    <Grid className={styles.dataBox2}>1PN - 35M2- S20</Grid>
                </Grid>
                <Grid className={styles.boxData}>
                    <Grid className={styles.titleBox}>Giá chào bán cao nhất</Grid>
                    <Grid className={styles.dataBox}>10 tỷ</Grid>
                    <Grid className={styles.dataBox2}>2PN - 50M2 - S302</Grid>
                </Grid>
                <Grid className={styles.boxData}>
                    <Grid className={styles.titleBox}>Giá chào bán phổ biến</Grid>
                    <Grid className={styles.dataBox}>6 tỷ</Grid>
                    <Grid className={styles.dataBox2}>2PN - 50M2 - S302</Grid>
                </Grid>
            </Grid>
            <Grid className={styles.content2}>1PN - PARKHILL - TIMECITY</Grid>
            <Grid className={styles.content3}>
                <Grid className={styles.dulieutin}>
                    <Grid className={styles.titleContent3}>Dữ liệu tin</Grid>
                    <Grid>
                        <TableContainer component={Paper}>
                            <Table sx={{ tableLayout: "fixed" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Giá bán</TableCell>
                                        <TableCell>Diện tích</TableCell>
                                        <TableCell>Loại</TableCell>
                                        <TableCell>Tòa/Khu</TableCell>
                                        <TableCell>Ngày đăng</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {rows.slice(0, 7).map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.gia}</TableCell>
                                            <TableCell>{row.dientich}</TableCell>
                                            <TableCell>{row.loai}</TableCell>
                                            <TableCell >{row.toa}</TableCell>
                                            <TableCell >{row.ngay}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid className={styles.xemthem}>Xem thêm</Grid>
                </Grid>
                <Grid className={styles.phanbo}>
                    <Grid className={styles.titleContent3}>Phân bổ</Grid>
                    <ResponsiveContainer width="100%" height={450}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Giá" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="Số tin" fill="#1976d2" />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </Grid>
    );
}