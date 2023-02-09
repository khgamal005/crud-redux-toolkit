import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const insertPost = createAsyncThunk(
    "posts/insertPost",
    async (item, thunkAPI) => {
      const { rejectWithValue, getState } = thunkAPI;
      const { auth } = getState();
    item.userId = auth.id;
      
  
      try {
        const res = await fetch("https://crud-3af4a-default-rtdb.firebaseio.com/posts.json", {
          method: "Post",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

//get posts

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetch("https://crud-3af4a-default-rtdb.firebaseio.com/posts.json");
        const data = await res.json();
        const loadedposts=[]
        for ( const key in data){
          loadedposts.push({
            id :key,
            title:data[key].title,
            description:data[key].description,
           
          })

        }
        return loadedposts


            } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
//get post/
export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
    const res = await fetch(`https://crud-3af4a-default-rtdb.firebaseio.com/posts/${id}.json`)
        const data = await res.json();
          return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////////////////

  export const  deleteUser=createAsyncThunk('posts/deleteUser',async(id,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try {
         await fetch(`https://crud-3af4a-default-rtdb.firebaseio.com/posts/${id}.json`,{
          method: 'delete',
                  })
        return id;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`https://crud-3af4a-default-rtdb.firebaseio.com/posts/${item.id}.json`, {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = { records: [], isloading: false, error: null, record: {}};

const postSlice =createSlice({
    name:'posts',
    initialState,
    reducers: {
      cleanRecord: (state) => {
        state.record ={};
      },
    },

    extraReducers: (builder) => {

 

            //getposts
            builder.addCase(fetchPosts.pending, (state, action) => {
                state.isloading=true
            })
            builder.addCase(fetchPosts.fulfilled, (state, action) => {
                state.isloading = false;
                state.records=action.payload

    
            })
            builder.addCase(fetchPosts.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.payload;
            })

                 //create post       
///get post

      
 builder.addCase(fetchPost.pending, (state, action) => {
  state.isloading=true
})
builder.addCase(fetchPost.fulfilled, (state, action) => {
  state.isloading = false;
 state.record= action.payload;


})
builder.addCase(fetchPost.rejected, (state, action) => {
  state.isloading = false;
  state.error = action.payload;

})

      
                 
     
                      /////////////deleteUser///////////


        builder.addCase(deleteUser.pending, (state, action) => {
            state.isloading=true
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isloading = false;
            state.records = state.records.filter(el=>el.id!==action.payload)
           
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        })

            builder.addCase(insertPost.pending, (state, action) => {
              state.isloading=true
          })
          builder.addCase(insertPost.fulfilled, (state, action) => {
              state.isloading = false;
             state.records= state.records.push(action.payload);
  
          })
          builder.addCase(insertPost.rejected, (state, action) => {
              state.isloading = false;
              state.error = action.payload;
  
          })
            //////////edit////////


            builder.addCase(editPost.pending, (state, action) => {
              state.isloading=true
              state.error =null;

          })
          builder.addCase(editPost.fulfilled, (state, action) => {
              state.isloading = false;
             state.record= action.payload;
  
          })
          builder.addCase(editPost.rejected, (state, action) => {
              state.isloading = false;
              state.error = action.payload;
  
          })
      },
})


export const {cleanRecord}=postSlice.actions

export default postSlice.reducer