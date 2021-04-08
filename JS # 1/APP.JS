document.write("<B>MARK SHEET<B><br><HR>")
var std_name=window.prompt("Enter your name");
document.write("Student's Name :",std_name,"<br>")
var std_roll=window.prompt("Enter your roll #");
document.write("Roll # :",std_roll,"<br><HR>")

var marks_eng=parseInt(window.prompt("Enter Your English Marks"));
document.write("Marks Obtained in English :",marks_eng,"<br>")
var marks_maths=parseInt(window.prompt("Enter Your Maths Marks"));
document.write("Marks Obtained in Maths :",marks_maths,"<br>")
var marks_phy=parseInt(window.prompt("Enter Your Physics Marks"));
document.write("Marks Obtained in Physics :",marks_phy,"<br>")
var marks_che=parseInt(window.prompt("Enter Your Chemistry Marks"));
document.write("Marks Obtained in Chemistry :",marks_che,"<br>")
var marks_com=parseInt(window.prompt("Enter Your Computer Marks"));
document.write("Marks Obtained in Computer :",marks_com,"<br><HR>")

document.write("Max Marks = 500<br>")
var total_marks=marks_che+marks_com+marks_eng+marks_maths+marks_phy
document.write("Total Marks Obtained = ",total_marks,"<br>")
var percentage=(total_marks/500)*100
document.write("Percentage = ",percentage,"<br><HR>")

if (percentage<100 && percentage>79){
    document.write("Grade : A-One")
}

else if (percentage<80 && percentage>69){
    document.write("Grade : A")
}

else if (percentage<70 && percentage>59){
    document.write("Grade : Better Luck next time")
}

else {
    document.write("Grade : Better Luck next time")
}

