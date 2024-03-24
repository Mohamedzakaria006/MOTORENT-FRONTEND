import {
    Typography,
    FormHelperText,
    FormControl,
    FormLabel,
    OutlinedInput,
    Grid,
    Stack
  } from "@mui/material";
  import {useForm} from 'react-hook-form'
import useUser from "../../pages/Auth/useUser";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { useState } from "react";
  
  
  const UserProfileDetailsForm = () => {
      const {data , isLoading} =useUser();
      console.log(data)
      const user =  data?.data
      
      const [ profileForm , setProfileForm] = useState(
      {
        firstName : data?.data.firstName,
        lastName   : data?.data.lastName,
        address   : data?.data.address,
        driverLicense  : data?.data.driverLicense ,
        phone  : data?.data.phone
      })

      console.log(profileForm)

      const changeHandler = (event) => {
        const {name , value} = event.target
        switch (name) {
          case 'firstName' : {
            setProfileForm((prevFormData) => ({ ...prevFormData, firstName: value }))
            break
          }
          case 'lastName' : {
            setProfileForm((prevFormData) => ({ ...prevFormData, lastName: value }))
            break
          }
          case 'phone' : {
            setProfileForm((prevFormData) => ({ ...prevFormData, phone: value }))
            break
          }
          case 'address' : {
            setProfileForm((prevFormData) => ({ ...prevFormData, address: value }))
            break
          }
          case 'driverLicense' : {
            setProfileForm((prevFormData) => ({ ...prevFormData, driverLicense: value }))
            break
          }
          default: {
            setProfileForm((prevFormData) => ({ ...prevFormData, [name]: value }))
            break
          }
        }
      }

      console.log(profileForm)
      const form = useForm({
          mode:"all"
      })
      const {register,formState}=form
      const {errors}=formState
   return (
      <>
      {isLoading && <LoadingIndicator />}
      <Stack sx={{m:2,p:2,borderRadius:"10px",backgroundColor: '#ffffff',
       border:"1px solid #3563E9"}}>
        <Typography variant="h5" noWrap component="div"   sx={{color:"#1A202C",
              fontSize:"20px",
              fontWeight:700,
              font:"Plus Jakarta Sans",
              fontStyle:"bold",
            
              }} >
        Profile Details
        </Typography>
        <FormHelperText sx={{  mb:2}}>You can update your info</FormHelperText>
        <form noValidate>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Email</FormLabel>
              <OutlinedInput
                disabled
                value={user?.email}
                id="input-email-user-info"
                placeholder="Email"
                type="email"
                {...register('email',{required:{value:true,
              message:"This Filed is required"},pattern:{value:/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,message:"Invalid email"
              }})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.email?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>First Name</FormLabel>
              <OutlinedInput
                name="firstName"
                value={profileForm.firstName}
                onChange={changeHandler}
                id="input-firstName-user-info"
                placeholder="First Name"
                type="text"
                {...register('firstName',{required:{value:true,
              message:"This Filed is required"},maxLength:{value:40,message:"name is too long, maxium 40 letters"
              
              
          },minLength:{value:3,message:"name is too short, minum 3 letters"}})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.firstName?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Last Name</FormLabel>
              <OutlinedInput
               name="lastName"
               value={profileForm.lastName}
               onChange={changeHandler}
                id="input-lastName-user-info"
                placeholder="Last Name"
                type="text"
                {...register('lastName',{required:{value:true,
              message:"This Filed is required"},maxLength:{value:40,message:"name is too long, maxium 40 letters"
              
              
          },minLength:{value:3,message:"name is too short, minum 3 letters"}})}
  
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                error={!!errors.message}
  
              />
              <FormHelperText sx={{color:"red"}}>{errors.lastName?.message}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Address</FormLabel>
              <OutlinedInput
                name="address"
                value={profileForm.address}
                onChange={changeHandler}
                id="input-address-user-info"
                placeholder="Your Address"
                type="text"
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                 {...register('address',{required:{value:true,
              message:"This Filed is required"},maxLength:{value:40,message:"Address is too long, maxium 40 letters"
              
              
          },minLength:{value:3,message:"Address is too short, minum 3 letters"}})}
                error={!!errors.message}
              />
              <FormHelperText sx={{color:"red"}}>{errors.address?.message}</FormHelperText>
  
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Drive Lisencese</FormLabel>
              <OutlinedInput
                name="driverLicense"
                value={profileForm.driverLicense}
                onChange={changeHandler}
                id="input-drivel-user-info"
                placeholder="Your Driver License"
                type="text"
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                 {...register('driverLicense',{required:{value:true,
              message:"This Filed is required"},pattern:{value:/^\d{3}\s[ء-ي]\s[ء-ي]\s[ء-ي]$/,message:"do not match a driver's license number consisting of 6 characters where the first three are numbers and the last 3 are Arabic characters with a white space between each Arabic character EX:123ا و ي "}})}
                error={!!errors.message}
              />
              <FormHelperText sx={{color:"red"}}>{errors.driverLicense?.message}</FormHelperText>
  
            </FormControl>
          </Grid>
          
          {/* <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend" sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Town/City</FormLabel>
              <OutlinedInput
                value={}
                id="input-city-user-info"
                placeholder="Your City"
                type="text"
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                {...register('city',{maxLength:{value:40,message:"name is too long, maxium 40 letters"
              
              
              },minLength:{value:3,message:"name is too short, minum 3 letters" }})}
                    error={!!errors.message}
              />
               <FormHelperText sx={{color:"red"}}>{errors.city?.message}</FormHelperText>
            </FormControl>
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormLabel component="legend"sx={{color:'#1A202C',font:"Plus Jakarta Sans",
      fontWeight:600, fontSize:"16px"}}>Phone</FormLabel>
              <OutlinedInput
                name="phone"
                value={profileForm.phone}
                onChange={changeHandler}
                id="input-Phone-user-info"
                placeholder="Your Phone"
                type="text"
                sx={{backgroundColor:"#F6F7F9",borderRadius:"10px",mt:3,border:"none" ,"&:hover":{border:"1px solid #F6F7F9"}}}
                {...register('phone',{required:{value:true,
                  message:"This Filed is required"},pattern:{value:/^(011|012|010|015)\d{8}$/,message:"phone should be 12 numbers and start with 011 or 012 or 015 or 010"}})}
                  error={!!errors.message}
              />
          <FormHelperText sx={{color:"red"}}>{errors.phone?.message}</FormHelperText>
  
            </FormControl>
          </Grid>
        </Grid>
        </form>
       </Stack>
      </>
    );
  };
  
  export default UserProfileDetailsForm;

// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   FormHelperText,
//   FormControl,
//   FormLabel,
//   OutlinedInput,
//   Grid,
//   Stack,
//   Button,
// } from "@mui/material";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import LoadingIndicator from "../../ui/LoadingIndicator";
// import useUser from "../../pages/Auth/useUser";

// const UserProfileDetailsForm = () => {
//   const { data, isLoading } = useUser();
//   const [profileForm, setProfileForm] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     driverLicense: "",
//     phone: "",
//   });

//   useEffect(() => {
//     if (data && data.data) {
//       const { firstName, lastName, address, driverLicense, phone } = data.data;
//       setProfileForm({
//         ...profileForm,
//         firstName: firstName || "",
//         lastName: lastName || "",
//         address: address || "",
//         driverLicense: driverLicense || "",
//         phone: phone || "",
//       });
//     }
//   }, [data]);

//   const { register, handleSubmit, formState } = useForm({
//     mode: "all",
//   });

//   const onSubmit = async () => {
//     try {
//       await axios.patch(
//         "http://localhost:3000/api/v1/users/userProfile",
//         profileForm,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       // Handle success if needed
//     } catch (error) {
//       console.error("Error updating user profile:", error);
//       // Handle error if needed
//     }
//   };

//   if (isLoading) return <LoadingIndicator />;

//   return (
//     <>
//       <Stack
//         sx={{
//           m: 2,
//           p: 2,
//           borderRadius: "10px",
//           backgroundColor: "#ffffff",
//           border: "1px solid #3563E9",
//         }}
//       >
//         <Typography
//           variant="h5"
//           noWrap
//           component="div"
//           sx={{
//             color: "#1A202C",
//             fontSize: "20px",
//             fontWeight: 700,
//             font: "Plus Jakarta Sans",
//             fontStyle: "bold",
//           }}
//         >
//           Profile Details
//         </Typography>
//         <FormHelperText sx={{ mb: 2 }}>You can update your info</FormHelperText>
//         <form onSubmit={handleSubmit(onSubmit)} noValidate>
//           <Grid container spacing={2}>
//             {/* Email field */}
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//                 <FormLabel
//                   component="legend"
//                   sx={{
//                     color: "#1A202C",
//                     font: "Plus Jakarta Sans",
//                     fontWeight: 600,
//                     fontSize: "16px",
//                   }}
//                 >
//                   Email
//                 </FormLabel>
//                 <OutlinedInput
//                   value={data?.data.email || ""}
//                   id="input-email-user-info"
//                   placeholder="Email"
//                   type="email"
//                   readOnly
//                   sx={{
//                     backgroundColor: "#F6F7F9",
//                     borderRadius: "10px",
//                     mt: 3,
//                     border: "none",
//                     "&:hover": { border: "1px solid #F6F7F9" },
//                   }}
//                 />
//               </FormControl>
//             </Grid>
//             {/* First Name field */}
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//                 <FormLabel
//                   component="legend"
//                   sx={{
//                     color: "#1A202C",
//                     font: "Plus Jakarta Sans",
//                     fontWeight: 600,
//                     fontSize: "16px",
//                   }}
//                 >
//                   First Name
//                 </FormLabel>
//                 <OutlinedInput
//                   name="firstName"
//                   value={profileForm.firstName}
//                   onChange={(e) =>
//                     setProfileForm({
//                       ...profileForm,
//                       firstName: e.target.value,
//                     })
//                   }
//                   id="input-firstName-user-info"
//                   placeholder="First Name"
//                   type="text"
//                   {...register("firstName")}
//                   sx={{
//                     backgroundColor: "#F6F7F9",
//                     borderRadius: "10px",
//                     mt: 3,
//                     border: "none",
//                     "&:hover": { border: "1px solid #F6F7F9" },
//                   }}
//                 />
//               </FormControl>
//             </Grid>
//             {/* Last Name field */}
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//                 <FormLabel
//                   component="legend"
//                   sx={{
//                     color: "#1A202C",
//                     font: "Plus Jakarta Sans",
//                     fontWeight: 600,
//                     fontSize: "16px",
//                   }}
//                 >
//                   Last Name
//                 </FormLabel>
//                 <OutlinedInput
//                   name="lastName"
//                   value={profileForm.lastName}
//                   onChange={(e) =>
//                     setProfileForm({
//                       ...profileForm,
//                       lastName: e.target.value,
//                     })
//                   }
//                   id="input-lastName-user-info"
//                   placeholder="Last Name"
//                   type="text"
//                   {...register("lastName")}
//                   sx={{
//                     backgroundColor: "#F6F7F9",
//                     borderRadius: "10px",
//                     mt: 3,
//                     border: "none",
//                     "&:hover": { border: "1px solid #F6F7F9" },
//                   }}
//                 />
//               </FormControl>
//             </Grid>
//             {/* Address field */}
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//                 <FormLabel
//                   component="legend"
//                   sx={{
//                     color: "#1A202C",
//                     font: "Plus Jakarta Sans",
//                     fontWeight: 600,
//                     fontSize: "16px",
//                   }}
//                 >
//                   Address
//                 </FormLabel>
//                 <OutlinedInput
//                   name="address"
//                   value={profileForm.address}
//                   onChange={(e) =>
//                     setProfileForm({
//                       ...profileForm,
//                       address: e.target.value,
//                     })
//                   }
//                   id="input-address-user-info"
//                   placeholder="Your Address"
//                   type="text"
//                   {...register("address")}
//                   sx={{
//                     backgroundColor: "#F6F7F9",
//                     borderRadius: "10px",
//                     mt: 3,
//                     border: "none",
//                     "&:hover": { border: "1px solid #F6F7F9" },
//                   }}
//                 />
//               </FormControl>
//             </Grid>
//             {/* Driver's License field */}
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//                 <FormLabel
//                   component="legend"
//                   sx={{
//                     color: "#1A202C",
//                     font: "Plus Jakarta Sans",
//                     fontWeight: 600,
//                     fontSize: "16px",
//                   }}
//                 >
//                   Driver's License
//                 </FormLabel>
//                 <OutlinedInput
//                   name="driverLicense"
//                   value={profileForm.driverLicense}
//                   onChange={(e) =>
//                     setProfileForm({
//                       ...profileForm,
//                       driverLicense: e.target.value,
//                     })
//                   }
//                   id="input-driverLicense-user-info"
//                   placeholder="Your Driver's License"
//                   type="text"
//                   {...register("driverLicense")}
//                   sx={{
//                     backgroundColor: "#F6F7F9",
//                     borderRadius: "10px",
//                     mt: 3,
//                     border: "none",
//                     "&:hover": { border: "1px solid #F6F7F9" },
//                   }}
//                 />
//               </FormControl>
//             </Grid>
//             {/* Phone field */}
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//                 <FormLabel
//                   component="legend"
//                   sx={{
//                     color: "#1A202C",
//                     font: "Plus Jakarta Sans",
//                     fontWeight: 600,
//                     fontSize: "16px",
//                   }}
//                 >
//                   Phone
//                 </FormLabel>
//                 <OutlinedInput
//                   name="phone"
//                   value={profileForm.phone}
//                   onChange={(e) =>
//                     setProfileForm({
//                       ...profileForm,
//                       phone: e.target.value,
//                     })
//                   }
//                   id="input-phone-user-info"
//                   placeholder="Your Phone"
//                   type="text"
//                   {...register("phone")}
//                   sx={{
//                     backgroundColor: "#F6F7F9",
//                     borderRadius: "10px",
//                     mt: 3,
//                     border: "none",
//                     "&:hover": { border: "1px solid #F6F7F9" },
//                   }}
//                 />
//               </FormControl>
//             </Grid>
//           </Grid>
//           {/* Submit button */}
//           <Button type="submit" variant="contained" sx={{ mt: 3 }}>
//             Update Profile
//           </Button>
//         </form>
//       </Stack>
//     </>
//   );
// };

// export default UserProfileDetailsForm;
