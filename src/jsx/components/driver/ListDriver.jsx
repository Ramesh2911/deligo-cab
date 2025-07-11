import React, { useEffect, useMemo, useState, useRef } from 'react';
import PageTitle from '../../layouts/PageTitle';
import DataTable from 'react-data-table-component';
import DataTableSettings from '../../../helpers/DataTableSettings';
import { Form, Row } from 'react-bootstrap';
import CommonLoader from "../loader/CommonLoader";
import {
   API_LIST_DRIVERS
}
   from '../../../config/Api';
import axios from 'axios';
import { Button } from 'rsuite';

const ListDriver = () => {

   const token = localStorage.getItem("token");
   const hasFetched = useRef(false);
   useEffect(() => {
      if (!hasFetched.current) {
         fetchDriverData();
         hasFetched.current = true;
      }
   }, []);

   const customStyles = {
      headCells: {
         style: {
            backgroundColor: "#6082b6",
            borderRight: "1px solid white",
            color: "white",
         },
      },
   };

   const [filterText, setFilterText] = useState("");
   const [loadingIndicator, setLoadingIndicator] = useState(false);
   const [driverData, setDriverData] = useState([]);
   const searchParam = [
      "name",
      "email",
      "phone",
      "is_blocked",
   ];

   const fetchDriverData = () => {
      const headers = {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`,
      };

      axios({
         method: "GET",
         url: API_LIST_DRIVERS,
         headers: headers,
      })
         .then((res) => {
            const result = res?.data?.data;
            const sortedResult = result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setDriverData(sortedResult);
            setLoadingIndicator(false);
         })
         .catch((e) => {
            console.log(e);
         });
   };

   const columns = [
      {
         name: <h5>Name</h5>,
         selector: (row) => row.name,
         sortable: true,
      },
      {
         name: <h5 style={{ minWidth: "200px" }}>Email</h5>,
         selector: (row) => row.email,
         sortable: true,
         cell: (row) => (
            <div
               title={row.email}
               style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
               }}
            >
               {row.email}
            </div>
         ),
      },
      {
         name: <h5 style={{ minWidth: "120px" }}>Phone</h5>,
         selector: (row) => row.phone,
         sortable: true,
         cell: (row) => (
            <div
               title={row.phone}
               style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
               }}
            >
               {row.phone}
            </div>
         ),
      },
      {
         name: <h5>Status</h5>,
         sortable: true,
         cell: (row) => (
            <span style={{ color: row.is_blocked ? "red" : "green" }}>
               {row.is_blocked ? "Blocked" : "Active"}
            </span>
         ),
      },
      {
         name: <h5>Action</h5>,
         center: true,
         cell: (row) => {
            return (
               <div style={{ display: "flex", gap: "10px" }}>
                  <Button
                     color="blue"
                     appearance="primary"
                     size="sm"
                  >
                     Approve
                  </Button>
                  <Button
                     color="red"
                     appearance="primary"
                     size="sm"
                  >
                     Reject
                  </Button>
               </div>
            );
         },
      }

   ];

   const subHeaderComponentMemo = useMemo(() => {
      return (
         <div>
            <Row>
               <Form className="d-flex">
                  <Form.Control
                     type="search"
                     placeholder="Search..."
                     className="me-2 rounded-pill"
                     aria-label="Search"
                     onChange={(e) => setFilterText(e.target.value)}
                  />
               </Form>
            </Row>
         </div>
      );
   }, []);

   return (
      <>
         <PageTitle activeMenu={"Driver List"} motherMenu={"Driver"} />

         <div className="table-responsive">

            <DataTable
               columns={driverData.length > 0 ? columns : []}
               data={DataTableSettings.filterItems(
                  driverData,
                  searchParam,
                  filterText
               )}
               customStyles={customStyles}
               direction="auto"
               highlightOnHover
               persistTableHead
               pagination
               paginationPerPage={DataTableSettings.paginationPerPage}
               paginationRowsPerPageOptions={
                  DataTableSettings.paginationRowsPerPageOptions
               }
               subHeader
               fixedHeaderScrollHeight="400px"
               subHeaderComponent={subHeaderComponentMemo}
               progressPending={loadingIndicator}
               progressComponent={
                  <CommonLoader loadingIndicator={loadingIndicator} />
               }
            />
         </div>
      </>
   );
};

export default ListDriver;