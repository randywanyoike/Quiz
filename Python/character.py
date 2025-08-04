
#Given a string, find the first character that does not repeat anywhere in the string. Return None if all characters repeat.

#Input: "Hello"
#Output: "H"
#Input: "Swiss"
#Output: "w"




def first_non_repeating_char(s):
    for char in s:
        if s.lower().count(char.lower()) == 1:
            return char
    return None

# Examples
print(first_non_repeating_char("Hello"))   
print(first_non_repeating_char("Swiss"))   




