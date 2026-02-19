# 06. Value Objects
The Simplest pattern in tactical domain designer.
They are used to **measure** and **objects** things in the domain.

- examples: currency value, telephone number, etc.
- the most important fact is the value of the object(so, interchangeable).
- Generally speaking, though, it should be avoid to use integer of float as the type of that objects:
  
  *build some kind of domain specific abstraction around the object types. Exmaple: Currency Amount, Duration, etc.*

Conceptual qualities of value objects:

1. **Measure** quantities or **describe characteristics**.
2. **Equivalent** values are **interchangeable**.
3. **Comparable** by value.
4. **Lack** intrinsic **identity**(though they may represent an identity).
5. **Self-contained**.
6. **Encapsulated** by **Entities**.
7. **Immutable**, so sharable.
8. Avoids **primitive obsession**.

## How-to Guide

Tactics for implementing in Python, strive to make them immutable:

1. Lean heavily on buil-in **immutable types** as `tuple`, `fronzenset`, `str`, etc.
2. **Validate** in initializer `__init__()` or `__new__()`.
3. **Property** getters with `@property`.
4. Override **equality/inequality** operators `__eq__()` and `__ne__()`.
5. Useful `__repr__()`.
6. Rich **comparisons** `__le__()`, etc.
7. **Prevent mutation** by overriding `__setattr__()`.
8. **Useful** `__str__()`, `__format__()`.
9. **Side-effect** free functions to produce new values.
10. **Named constructors** with `@classmethod` (An opportunity to express the language domain).
11. **Interning/flyweight** with `__new__()`.


## A simple Example

```python
class Email:
    """An e-mail address.
    """

    @classmethod
    def from_text(cls, address):
        if '@'not in address:
            raise ValueError("e-mail address must contain '@'")

        local_part, _, domain_part = address.partition('@')

    def __init__(self, local_part, domain_part):
        if len(local_part) + len(domain_part) > 255:
            raise ValueError("e-mail addresses too long")
        
        self._parts = (
            local_part,domain_part
            )
    
    def __str__(self):
        return '@'.join(self._parts)

    def __repr__(self):
        return "e-mail(local_part={!r}, domain_part={!r})".format(
            *self._parts
            )

    def __eq__(self,rhs):
        if not isinstance(rhs, Email):
            return NotImplemented
        return self._parts == rhs._parts

    def __ne__(self, rhs):
        return not (self == rhs)

    def __hash__(self):
        return hash(self._parts)

    @property
    def local(self):
        return self._parts[0]

    @property
    def domain(self):
        return self._parts[1]

    def replace(self, local=None, domain=None):
        return Email(
            local_part=local or self._parts[0],
            domain_part=domain or self._parts[1]
        )

```
### Notes:

- Focus on immutability
- Most of the model can be implemented as Value Objects