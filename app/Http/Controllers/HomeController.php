<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Instructor;

class HomeController extends Controller
{
    function CourseFun(Request $request){
        $result= Course::all();
        return $result;
    }

    function InstructorFun(Request $request){
        $result= Instructor::all();
        return $result;
    }
}
