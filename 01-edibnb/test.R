library(httr) #for http request
library(readr) #for reading files
library(V8) # use javascript v8 engine

ctx <- V8::v8()
ctx$source("js/mark.js") # use the mark.js function

#get the mark by the label of the chunk given
get_mark <- function(label) {
  current_path <- rstudioapi::getSourceEditorContext()$path
  #get source file content
  source_str <- read_file(current_path)

  return(ctx$call("getMarkOption", label, source_str))
}



# load packages-----------------------------------------------------------------
new_recorder <- function(tutorial_id, tutorial_version, user_id, event, data) {
  cat("-------event received----\n")
  cat(tutorial_id, " (", tutorial_version, "): ", user_id, ", ", event, "\n", data$label, ", ", data$answers, ",       ", data$correct, ",\n", sep = "")
  print (data)
  cat("-------end event ---\n\n-")
  # process data here
}

options(tutorial.event_recorder = new_recorder)

