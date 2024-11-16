import express, { NextFunction, Request, Response } from "express";

const app = express()


// parsers
app.use(express.json());
app.use(express.text());


// 
const userRouter = express.Router();
const coursesRouter = express.Router();


app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', coursesRouter);

userRouter.post('/create-user', (req: Request, res: Response) => {
  const user = req.body;

  console.log(user);

  res.json({
    success: true,
    massage: "user is created",
    data: user
  })

})

coursesRouter.post('/create-course', (req: Request, res: Response) => {
  const course = req.body;

  res.json({
    success: true,
    massage: "courses is created",
    data: course
  })
})








const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next()
}



app.all("*",(req : Request,res: Response)=> {
  res.status(400).json({
    success: false,
    message: "Route is not found"
  })
})






app.get('/', logger, async (req: Request, res: Response, next : NextFunction) => {
  // console.log(req.params);
  // console.log(req.query);
  // res.send('Hello kaku');
  try {
    res.send(something)
  } catch (error) {
    // console.log(error);
    next(error)
    // res.status(400).json({
    //   success: false,
    //     massage: "failed to get data"
    // })
  }
})

app.post('/', logger, (req: Request, res: Response) => {
  console.log(req.body);
  // res.send("got data")
  res.json({
    message: "success data"
  })

})



// Global Error Handler

app.use((error : any, req : Request,res : Response , next : NextFunction)=> {
  console.log(error);
  if(error){
    res.status(400).json({
      success: false,
      message: 'something went wrong'
    })
  }
})




export default app;