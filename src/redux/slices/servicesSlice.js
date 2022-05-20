import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const response = await fetch("http://localhost:5000/services").then((res) =>
      res.json()
    );
    return response;
  }
);
export const fetchNewServices = createAsyncThunk(
  "services/fetchNewServices",
  async () => {
    const response = await fetch("http://localhost:5000/newServices").then(
      (res) => res.json()
    );
    return response;
  }
);
export const fetchService = createAsyncThunk(
  "services/fetchService",
  async (id) => {
    const response = await fetch(`http://localhost:5000/services/${id}`).then(
      (res) => res.json()
    );
    return response;
  }
);
// export const deleteService = createAsyncThunk(
//   "services/deleteService",
//   async (id) => {
//     const response = await fetch(`http://localhost:5000/services/${id}`, {
//       method: "DELETE",
//     }).then((res) => res.json());
//     return response;
//   }
// );

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    service: {},
    count: 0,
    newServices: [],
    isLoading: true,
  },
  reducers: {
    services: (state, { payload }) => {
      state.services.push(payload.services);
    },
    count: (state, { payload }) => {
      return { ...state, count: payload.count };
    },
    newServices: (state, { payload }) => {
      state.newServices.push(payload);
    },
    service: (state, { payload }) => {
      return { ...state, service: payload };
    },
    isLoading: (state) => {
      return { ...state, isLoading: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      //   state.services = action.payload.services;
      return {
        ...state,
        services: action.payload.services,
        count: action.payload.count,
        isLoading: false,
      };
    });
    builder.addCase(fetchNewServices.fulfilled, (state, action) => {
      return { ...state, newServices: action.payload, isLoading: false };
    });
    builder.addCase(fetchService.fulfilled, (state, action) => {
      return { ...state, service: action.payload, isLoading: false };
    });
  },
});

export const { service, services, newServices, count, isLoading } =
  servicesSlice.actions;

export default servicesSlice.reducer;
