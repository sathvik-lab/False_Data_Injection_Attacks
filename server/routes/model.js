const router = require("express").Router();

router.route('/lstm').post((req, res) => {
    var str = "";
    const { spawn } = require('child_process');
    var dataPath = "";
    const filePath = "C:/Users/sathvik/Desktop/FDIA/login-logout/AuthInMern/server/python/lstm/test_lstm.py"
    if (req.body.file === "Biased") {
        dataPath = "C:/Users/sathvik/Desktop/FDIA/FDIA-PdM-master/Datasets/Attacked test data/Attack scenario/Continuous/Biased.txt";
    }
    else if (req.body.file === "Random") {
        dataPath = "C:/Users/sathvik/Desktop/FDIA/FDIA-PdM-master/Datasets/Attacked test data/Attack scenario/Continuous/Random.txt";
    }
    else if (req.body.file === "Predict") {
        dataPath = "C:/Users/sathvik/Desktop/FDIA/FDIA-PdM-master/Datasets/Attacked test data/True/Test.txt";
    }
    const childPython = spawn('python', [filePath, dataPath]);

    childPython.stdout.on('data', (data) => {
        console.log("Python output:", data);
        str += data;
    });

    childPython.on('close', (code) => {
        console.log(str);
        // var arr = str.split(' ');
        // var numbers = arr.map(Number);
        // console.log(numbers)
        res.json(str);
        // console.log(array);
        console.error(`child process exited with code ${code}`);
    })

    childPython.on("end", () => {
        console.log("python file ran successfully");
    })

    childPython.stderr.on("data", (data) => {
        console.log(`stdout:${data}`)
    })
});
router.route('/cnn').post((req, res) => {
    var str = "";
    const { spawn } = require('child_process');
    var dataPath = "";
    const filePath = "C:/Users/sathvik/Desktop/FDIA/login-logout/AuthInMern/server/python/cnn/test_cnn.py"
    if (req.body.file === "Biased") {
        dataPath = "C:/Users/sathvik/Desktop/FDIA/FDIA-PdM-master/Datasets/Attacked test data/Attack scenario/Continuous/Biased.txt";
    }
    else if (req.body.file === "Random") {
        dataPath = "C:/Users/sathvik/Desktop/FDIA/FDIA-PdM-master/Datasets/Attacked test data/Attack scenario/Continuous/Random.txt";
    }
    else if (req.body.file === "Predict") {
        dataPath = "C:/Users/sathvik/Desktop/FDIA/FDIA-PdM-master/Datasets/Attacked test data/True/Test.txt";
    }

    const childPython = spawn('python', [filePath, dataPath]);

    childPython.stdout.on('data', (data) => {
        console.log("Python output:", data);
        str += data;
    });
    childPython.on('close', (code) => {
        console.log(str);
        res.json(str);
        console.error(`child process exited with code ${code}`);
    })

    childPython.on("end", () => {
        console.log("python file ran successfully");
    })

    childPython.stderr.on("data", (data) => {
        console.log(`stdout:${data}`)
    })
});
router.route('/gru').post((req, res) => {
    var str = "";
    const { spawn } = require('child_process');
    var dataPath = "";
    const filePath = "C:/Users/sathvik/Desktop/FDIA/login-logout/AuthInMern/server/python/gru/test_gru .py"
    if (req.body.file === "Biased") {
        dataPath = "C:/Users/sathvik/Desktop/FDIA/FDIA-PdM-master/Datasets/Attacked test data/Attack scenario/Continuous/Biased.txt";
    }
    else if (req.body.file === "Random") {
        dataPath = "C:/Users/sathvik/Desktop/FDIA/FDIA-PdM-master/Datasets/Attacked test data/Attack scenario/Continuous/Random.txt";
    }
    else if (req.body.file === "Predict") {
        dataPath = "C:/Users/sathvik/Desktop/FDIA/FDIA-PdM-master/Datasets/Attacked test data/True/Test.txt";
    }
    const childPython = spawn('python', [filePath, dataPath]);

    childPython.stdout.on('data', (data) => {
        str += data;
    });

    childPython.on('close', (code) => {
        // console.log(str);
        // var arr = str.split(' ');
        // var numbers = arr.map(Number);
        // console.log(numbers)
        res.json(str);
        // console.log(array);
        console.error(`child process exited with code ${code}`);
    })

    childPython.on("end", () => {
        console.log("python file ran successfully");
    })

    childPython.stderr.on("data", (data) => {
        console.log(`stdout:${data}`)
    })
});


module.exports = router;


