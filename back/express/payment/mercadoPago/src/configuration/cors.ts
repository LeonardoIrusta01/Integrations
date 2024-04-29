const whiteList = [
  "http://localhost:3000",
  "http://localhost:3001"
]

export const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin) return callback(null, true)

    if (whiteList.indexOf(origin) === -1) {
      const msg =
        'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}