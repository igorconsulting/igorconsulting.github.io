# 05. Entity Objects
It's a next level of sofistication.

## Conceptual Qualities of Entiy objects

1. Represent things distinguishable by identity - even if they are otherwise equivalent.
2. The identity is Stable and unique in the model context.
3. Lifecycle is important - Creation, Evolution, Deactivation.
4. Often Mutable.
5. Composite - Composed of other entities and value objects.

## Tactics for implementing in Python

1. Distinguish between creation and instantiation.
2. Created via a **factory**(design pattern?) function.
    - Establishes invariants or fails. *could rely on `__init__()` failing.
    - Obtain/create a unique ID.
    - Prefer surrogate "factless" IDs(e.g. UUID) over natural ID.
    - Often module-scope factory-functions for root entities, factory-methos for child entities.

3. `__init__()` for instantiation.
4. `__init__()` acceps ID and all state.
5. Maintain and check a `_discarted` flag.
6. Consider maintaining a `_version`.
7. In concurrent environments maintain an `_instance_id`.
8. Later*: `__init__()` must succeed - validation already performed and invariants established previously.

## Example

```python

```